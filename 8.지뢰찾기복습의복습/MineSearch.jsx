import React, { memo, useReducer, useMemo, useEffect, createContext } from "react";
import Table from './Table'
import Form from './Form'
export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE:-4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0
}
const plantMine = (row, cell, mine) => {
    
    const candidate = Array(row * cell).fill().map((arr, i) => {
      return i;
    });
    const shuffle = [];
    while (candidate.length > row * cell - mine) {
      const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
      shuffle.push(chosen);
    }
    const data = [];
    for (let i = 0; i < row; i++) {
      const rowData = [];
      data.push(rowData);
      for (let j = 0; j < cell; j++) {
        rowData.push(CODE.NORMAL);
      }
    }
  
    for (let k = 0; k < shuffle.length; k++) {
      const ver = Math.floor(shuffle[k] / cell);
      const hor = shuffle[k] % cell;
      data[ver][hor] = CODE.MINE;
    }
  
  
    return data;
  };
const initialState = {
  tableData: [],
  timer: 0,
  opendCount: 0,
  row: 0,
  cell: 0,
  mine: 0,
  result: '',
  halted: true
}
export const TableContext = createContext({})

const reducer = (state, action) => {
  switch(action.type){
    case GAME_START: {
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
        opendCount: 0,
        timer: 0,
        row: action.row,
        cell: action.cell,
        mine: action.mine,
        result: '',
        halted: false
      }
    }
    case OPEN_CELL: {
        const tableData = [...state.tableData]
        tableData.forEach((e, i) => {
            tableData[i]  = [...state.tableData[i]]
        })
        const checked = []
        let opendCount = 0
        const checkAround = (row, cell) => {
            if (cell < 0 || cell > tableData[0].length - 1 ){
              return ;
            }
            if ([CODE.FLAG, CODE.QUESTION].includes(tableData[row][cell])){
              return;
            }
            if (checked.includes(row+'/'+cell)){
                return;
            }else{
                checked.push(row+'/'+cell)
            }
          
            let around = []
            if (row > 0){
                around = around.concat(
                    tableData[row - 1][cell -1],
                    tableData[row - 1][cell],
                    tableData[row - 1][cell + 1]
                )
            }
            around =  around.concat(tableData[row][cell - 1], tableData[row][cell + 1])
          
            if (row < tableData.length - 1){ 
               
                around = around.concat(
                    tableData[row + 1][cell -1],
                    tableData[row + 1][cell],
                    tableData[row + 1][cell + 1]
                )
            }
         
    
            const count = around.filter((v) => [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)).length
            if (count === 0){ //????????? ????????? ????????? ??????
              
              let near = []
              if ( row > 0){
                near.push( [row - 1, cell - 1] )
                near.push(   [row - 1, cell])
                near.push([row - 1, cell + 1])
    
              }
              near.push([row, cell - 1])
              near.push([row, cell + 1])
            
              if (row < tableData.length - 1){
                near.push( [row + 1, cell - 1])
                near.push( [row + 1, cell])
                near.push( [row + 1, cell + 1])
              }
              
              near.forEach((v) => {
                checkAround(v[0], v[1])
              })
              
            }
            opendCount += 1
            tableData[row][cell]  = count
        }

        checkAround(action.row, action.cell)

        let halted = false
        let result = ''
        if (state.row * state.cell - state.mine === state.opendCount + opendCount){
            halted = true
            result = `${state.timer} ??? ?????? ??????????????????.`
        }
      
        return{
            ...state,
            tableData,
            halted,
            result,
            opendCount: state.opendCount + opendCount
          }         
    }
    case CLICK_MINE: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...state.tableData[action.row]]
      tableData[action.row][action.cell]  = CODE.CLICKED_MINE

      return{
        ...state,
        tableData,
        halted: true
      }  
    }
    case INCREMENT_TIMER: {
        return {
            ...state,
            timer: state.timer + 1
        }
    }
    case FLAG_CELL: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...state.tableData[action.row]]
      if (tableData[action.row][action.cell] === CODE.MINE){
        tableData[action.row][action.cell] = CODE.FLAG_MINE
      } else {
        tableData[action.row][action.cell] = CODE.FLAG       
      }
      return{
        ...state,
        tableData,
      }
    }
    case QUESTION_CELL: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...state.tableData[action.row]]
      if (tableData[action.row][action.cell] === CODE.FLAG_MINE){
        tableData[action.row][action.cell] = CODE.QUESTION_MINE
      } else {
        tableData[action.row][action.cell] = CODE.QUESTION       
      }
      return{
        ...state,
        tableData,
      }
    }
    case NORMALIZE_CELL: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...state.tableData[action.row]]
      if (tableData[action.row][action.cell] === CODE.QUESTION_MINE){
        tableData[action.row][action.cell] = CODE.MINE
      } else {
        tableData[action.row][action.cell] = CODE.NORMAL      
      }
      return{
        ...state,
        tableData,
      }
    }
  }

}

export const GAME_START = "GAME_START"
export const OPEN_CELL = "OPEN_CELL"
export const CLICK_MINE = "CLICK_MINE"
export const INCREMENT_TIMER = "INCREMENT_TIMER"
export const FLAG_CELL = "FLAG_CELL"
export const QUESTION_CELL = "QUESTION_CELL"
export const NORMALIZE_CELL = "NORMALIZE_CELL"

const MineSearch = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { tableData, timer, halted, result } =  state
  const value = useMemo(() => ({ tableData, dispatch, halted }), [tableData, halted])
  useEffect(() => {
    let timer;
    if (halted === false ){
        timer = setInterval(() => {dispatch({type: INCREMENT_TIMER})}, 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [halted])
  return(
    <TableContext.Provider value={value}>
      <Form />
      <Table />
      <div>{timer}</div>
      <div>{result}</div>
    </TableContext.Provider>
  )
  
})

export default MineSearch
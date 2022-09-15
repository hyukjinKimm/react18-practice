import React, { memo, useReducer, createContext, useMemo} from "react";
import Table from "./Table";
import Form from "./Form"

export const TableContext = createContext({
   
  });
export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0
}
const initialState = {
  tableData: [],
  timer: 0,
  result: '',
  halted: true
}
const getMine = (row, cell, mine) => {
  const arr = Array(row*cell).fill().map((v,i)=>i)
  let mine_index = []
  for(let i = 0 ; i < mine ; i ++){
    mine_index.push(arr.splice(Math.floor( Math.random() * arr.length), 1)[0])
  }
  const tableData = []
  for (let i =0 ; i < row; i ++){
    tableData.push(Array(cell).fill(CODE.NORMAL))
  }
  for(let i = 0; i < mine_index.length; i ++){
    let index = mine_index[i]
    tableData[parseInt(index/cell)][index % cell] = CODE.MINE
  }
  return tableData
}
const reducer = (state, action) => {
  switch(action.type){
    case START_GAME:{
      return {
        ...state,
        tableData: getMine(action.row, action.cell, action.mine),
        halted: false
      }
    }
    case OPEN_CELL: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...tableData[action.row]]
      tableData[action.row][action.cell] = CODE.OPENED


      return {
        ...state, 
        tableData
      }
    }
    case CLICK_MINE: {
        const tableData = [...state.tableData]
        tableData[action.row] = [...tableData[action.row]]
        tableData[action.row][action.cell] = CODE.CLICKED_MINE
        return {
          ...state, 
          tableData,
          halted: true
        }
    }
    case FLAG_CELL: {
        const tableData = [...state.tableData]
        tableData[action.row] = [...tableData[action.row]]

        if (tableData[action.row][action.cell] == CODE.NORMAL){
            tableData[action.row][action.cell] = CODE.FLAG
        }
        else{
            tableData[action.row][action.cell] = CODE.FLAG_MINE       
        }
        return {
          ...state, 
          tableData,
        }
    }     
    case QUESTION_CELL: {
        const tableData = [...state.tableData]
        tableData[action.row] = [...tableData[action.row]]

        if (tableData[action.row][action.cell] == CODE.FLAG){
            tableData[action.row][action.cell] = CODE.QUESTION
        }
        else{
            tableData[action.row][action.cell] = CODE.QUESTION_MINE      
        }
        return {
          ...state, 
          tableData,
        }
    }    
    case NORMALIZE_CELL: {
        const tableData = [...state.tableData]
        tableData[action.row] = [...tableData[action.row]]

        if (tableData[action.row][action.cell] == CODE.QUESTION){
            tableData[action.row][action.cell] = CODE.NORMAL
        }
        else{
            tableData[action.row][action.cell] = CODE.MINE      
        }
        return {
          ...state, 
          tableData,
        }
    }      
    
    default:
        return state
  }
}

export const START_GAME = "START_GAME"
export const OPEN_CELL = "OPEN_CELL"
export const CLICK_MINE = "CLICK_MINE"
export const FLAG_CELL = "FLAG_CELL"
export const QUESTION_CELL = "QUESTION_CELL"
export const NORMALIZE_CELL = "NORMALIZE_CELL"
const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, timer, result, halted} = state

  const value = useMemo(() => ({tableData, dispatch, halted}), [tableData, halted])

  return(
    <TableContext.Provider value={value}>
      <Form />
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </TableContext.Provider>
  )
}
export default MineSearch
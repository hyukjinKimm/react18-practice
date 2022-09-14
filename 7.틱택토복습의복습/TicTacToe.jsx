import React, { memo, useReducer, useEffect } from "react";
import Table from  './Table'
const initialState = {
  winner: null,
  turn: 'O',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']],
  recentCell: [-1, -1]
}
export const SET_WINNER = 'SET_WINNER'
export const CHANGE_TURN = 'CHANGE_TURN'
export const CLICK_CELL = 'CLICK_CELL'
export const RESET_GAME = 'RESET_GAME'
const reducer = (state, action) => {
  switch(action.type){
    case SET_WINNER: {
      return {
        ...state,
        winner: state.turn
      }
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O'
      }
    }
    case CLICK_CELL: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...state.tableData[action.row]]
      tableData[action.row][action.cell] = state.turn
      const recentCell = [action.row, action.cell]
      return{
        ...state,
        tableData,
        recentCell
      }
    }
    case RESET_GAME: {
      return {
        ...state,
        tableData: [['', '', ''], ['', '', ''], ['', '', '']],
        recentCell: [-1, -1]
      }
    }
  }
}
const TicTacToe = memo(() => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { tableData, winner, turn, recentCell  } = state
  const [row, cell] = recentCell
  useEffect(() => {
    if (row < 0){
        return;
    }
    let win = false;
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn){
        win = true
    } else if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn){
        win = true     
    } else if ( tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn ){
        win = true
    } else if ( tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn ){
        win = true
    }
    if (win) {
        dispatch({type: SET_WINNER})
        dispatch({type: RESET_GAME})
    } else {
        let all = true
        tableData.forEach((e) => {
          e.forEach((v) => {
            if(!v){
              all = false
            }
          })
        })
        if (all){ // 무승부
            dispatch({type: RESET_GAME})
        } else {
          dispatch({type: CHANGE_TURN})
        }
    }
  }, [recentCell])
  return(
    <React.Fragment>
      <Table tableData={tableData} dispatch={dispatch}/>
      {winner ? <div>승자는 {winner} 입니다.</div> : null}
    </React.Fragment>
  )
})
export default TicTacToe
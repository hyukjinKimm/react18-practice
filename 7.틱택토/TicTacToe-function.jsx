import React, { memo, useState, useReducer, useCallback } from "react";
import Table from './Table-function'
const initialState = {
  winner: '',
  turn: 'O',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']]
}
export const SET_WINNER = 'SET_WINNER'
export const CLICK_CELL = 'CLICK_CELL'
export const CHANGE_TURN = 'SET_TURN'
const reducer = (state, action) => {
  switch(action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData]
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn
      return {
        ...state,
        tableData
      }
    }
    case CHANGE_TURN: 
      return {
        ...state, 
        turn: state.turn === 'O' ? 'X':'O',
      }

}

}
const TicTacToe = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState)
  //const [winner, setWinner] = useState('')
  //const [turn, setTurn] = useState('O')
  //const [tableDate, setTableDate] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: 'O'})
  }, [])
  return(
    <React.Fragment>
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
      {state.winner && <div>{state.winner}님의 승리</div>}
    </React.Fragment>
  )
})

export default TicTacToe;
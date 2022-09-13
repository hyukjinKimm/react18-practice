import React, { memo, useState, useReducer, useCallback } from "react";
import Table from './Table-function'
const initialState = {
  winner: '',
  turn: 'O',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']]
}
const SET_WINNER = 'SET_WINNER'
const reducer = (state, action) => {
  switch(action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
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
      <Table onClick={onClickTable} tableData={state.tableData}/>
      {state.winner && <div>{state.winner}님의 승리</div>}
    </React.Fragment>
  )
})

export default TicTacToe;
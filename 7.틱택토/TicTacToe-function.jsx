import React, { memo, useState, useReducer } from "react";
import Table from './Table-function'
const initialState = {
  winner: '',
  turn: '0',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']]
}
const TicTacToe = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState)
  //const [winner, setWinner] = useState('')
  //const [turn, setTurn] = useState('0')
  //const [tableDate, setTableDate] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  return(
    <React.Fragment>
      <Table />
      {winner && <div>{winner}님의 승리</div>}
    </React.Fragment>
  )
})

export default TicTacToe;
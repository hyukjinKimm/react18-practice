import React, { PureComponent } from "react";
import Table from './Table-class'
class TicTacToe extends PureComponent{

  state = {
    winner: '',
    turn: '0',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']]
  }
  render(){
    return(
      <React.Fragment>
        <Table />
        {winner && <div>{winner}님의 승리</div>}
      </React.Fragment>
    )
  }
}
export default TicTacToe;
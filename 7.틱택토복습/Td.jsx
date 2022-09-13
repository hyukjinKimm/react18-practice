import React, { memo } from "react";
import { SET_WINNER, CELL_CLICK, CHANGE_TURN } from "./TicTacToe-function";
const Td = memo(( {rowIndex, cellIndex, cellData, dispatch }) => {

  const onClickTd = () => {    
    if(cellData){
      return;
    }
    dispatch({type: CELL_CLICK, row: rowIndex, cell: cellIndex})
  }

  return(
    <React.Fragment>
      <td onClick={onClickTd}>{cellData}</td>
    </React.Fragment>
  )
})
export default Td
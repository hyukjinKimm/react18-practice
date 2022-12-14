import React, { memo, useCallback, useRef, useEffect } from "react";
import { CLICK_CELL } from "./TicTacToe-function";
const Td = memo(({rowIndex, cellIndex, dispatch, cellData }) => { 
  const onclickTd = useCallback(() => {
    console.log(rowIndex, cellIndex)
    if(cellData){
      return;
    }
    dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex})
  }, [cellData])
  return(
    <React.Fragment>
      <td onClick={onclickTd}>{cellData}</td>
  </React.Fragment>
  )
})

export default Td
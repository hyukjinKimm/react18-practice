import React, { memo, useCallback } from "react";
import { CLICK_CELL, CHANGE_TURN } from "./TicTacToe-function";
const Td = memo(({rowIndex, cellIndex, dispatch, cellData }) => {
  const onclickTd = useCallback(() => {
    console.log(rowIndex, cellIndex)
    dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex})
    dispatch({type: CHANGE_TURN})
  }, [])
  return(
    <React.Fragment>
      <td onClick={onclickTd}>{cellData}</td>
  </React.Fragment>
  )
})

export default Td
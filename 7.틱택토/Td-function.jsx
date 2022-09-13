import React, { memo, useCallback, useRef, useEffect } from "react";
import { CLICK_CELL } from "./TicTacToe-function";
const Td = memo(({rowIndex, cellIndex, dispatch, cellData }) => { 
  console.log('td rendered')
  const ref = useRef([])
  useEffect(() => {
    console.log(rowIndex === ref.current[0], rowIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3])
    ref.current = [rowIndex, cellIndex, dispatch, cellData]
  })
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
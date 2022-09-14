import React, { memo, useCallback } from "react";
import { CLICK_CELL, CHANGE_TURN  } from "./TicTacToe";
const Td = memo(({ rowIndex, cellIndex, cellData, dispatch }) => {

  const onClickTd = useCallback(() => {
    if(cellData){
        return;
    }
    dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex})
  }, [cellData])
  return(
    <React.Fragment>
      <td onClick={onClickTd}>
        {cellData}
      </td>
    </React.Fragment>
  )
})
export default Td
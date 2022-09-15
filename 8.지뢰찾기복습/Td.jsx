import React, { memo, useCallback, useContext } from "react";
import { CLICK_MINE } from "./MineSearch";
import { TableContext, CODE, OPEN_CELL, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL } from "./MineSearch";

const Td = memo(({ rowIndex, cellIndex }) => {

  const { tableData, dispatch, halted } = useContext(TableContext)
  const getTdStyle = useCallback((code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
          return {
            background: '#444',
          };
        case CODE.CLICKED_MINE:
        case CODE.OPENED:
          return {
            background: 'white',
          };
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          return {
            background: 'yellow',
          };
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          return {
            background: 'red',
          };
        default:
          return {
            background: 'white',
          };
      }
  })
  const getTdText = useCallback((code) => {
    switch (code) {
        case CODE.NORMAL:
          return '';
        case CODE.MINE:
          return 'X';
        case CODE.CLICKED_MINE:
          return '펑';
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          return '!';
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          return '?';
        default:
          return code || '';
      }
  })
  const onClickTd = useCallback(() => {
    if(halted){
        return;
    }
    switch(tableData[rowIndex][cellIndex]){
      case CODE.NORMAL:
      case CODE.FLAG:
      case CODE.QUESTION:
        dispatch({type: OPEN_CELL, row: rowIndex, cell: cellIndex})
        return;
      case CODE.MINE:
      case CODE.FLAG_MINE:
      case CODE.QUESTION_MINE:
        dispatch({type: CLICK_MINE, row: rowIndex, cell: cellIndex});
        return;
      case CODE.OPENED:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted])
  const onRightClickTd = useCallback((e) => {
    e.preventDefault();

    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.FLAG_MINE:
      case CODE.FLAG:
        dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);
  return(
    <React.Fragment>
    <td
      style={getTdStyle(tableData[rowIndex][cellIndex])}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
      >
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
    </React.Fragment>
  )
})
export default Td
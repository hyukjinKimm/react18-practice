import React, { memo, useContext, useCallback, useState } from "react";
import { START_GAME } from "./MineSearch";
import { TableContext } from "./MineSearch";

const Form = memo(() => {
  const { dispatch } = useContext(TableContext)

  const [cell, SetCell] = useState(10)
  const [row, SetRow] = useState(10)
  const [mine, SetMine] = useState(20)
  
  const onChangeCell = useCallback((e) => {
    SetCell(e.target.value)
  }, [])
  const onChangeRow = useCallback((e) => {
    SetRow(e.target.value)
  }, [])
  const onChangeMine = useCallback((e) => {
    SetMine(e.target.value)
  }, [])

  const onClickBtn = useCallback(() => {
    dispatch({type: START_GAME, cell: cell, row: row, mine: mine})
  }, [row, cell, mine])
  return(
    <React.Fragment>
        <input type="number" placeholder="세로" value={cell} onChange={onChangeCell}/>
        <input type="number" placeholder="가로" value={row} onChange={onChangeRow}/>
        <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine}/>
        <button onClick={onClickBtn}>시작</button>
    </React.Fragment>
  )
})
export default Form
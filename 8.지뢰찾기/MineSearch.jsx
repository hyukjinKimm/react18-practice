import React, { memo, useReducer } from "react";
import Table from './Table'
import Form from './Form'
const initialState = {
  tableData: [],
  timer: 0,
  result: ''
}
const reducer = (state, action) => {
  switch(action.type) {
    default:
        return state
  }
}
const MineSearch = memo(() => {
  const [state, dispatch] = useReducer(reducer,  initialState)
  const { timer, result } = state
  return(
    <React.Fragment>
      <Form />
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </React.Fragment>
  )
})
export default MineSearch
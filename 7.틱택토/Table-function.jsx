import React, { memo } from "react";
import Tr from './Tr-function'

const Table = memo(({ onClick, tableData, dispatch } ) => {

  return(
    <React.Fragment>
      <table onClick={onClick}>
        <tbody>
          {Array(tableData.length).fill().map((v, i) => (<Tr dispatch={dispatch} rowIndex ={i} rowData={tableData[i]}/>))}
        </tbody>
      </table>
  </React.Fragment>
  )
})
export default Table;
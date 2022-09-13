import React, { memo } from "react";
import Tr from './Tr-function'

const Table = memo(({tableData, dispatch } ) => {
  return(
    <React.Fragment>
      <table>
        <tbody>
          {Array(tableData.length).fill().map((v, i) => (<Tr key={i} dispatch={dispatch} rowIndex ={i} rowData={tableData[i]}/>))}
        </tbody>
      </table>
  </React.Fragment>
  )
})
export default Table;
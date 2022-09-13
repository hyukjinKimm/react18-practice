import React, { memo } from "react";
import Tr from './Tr-function'

const Table = memo(({ onClick, tableData, dispatch } ) => {
  console.log('table renderd')
  return(
    <React.Fragment>
      <table onClick={onClick}>
        <tbody>
          {Array(tableData.length).fill().map((v, i) => (<Tr key={i} dispatch={dispatch} rowIndex ={i} rowData={tableData[i]}/>))}
        </tbody>
      </table>
  </React.Fragment>
  )
})
export default Table;
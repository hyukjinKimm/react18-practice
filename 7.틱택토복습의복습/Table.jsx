import React, { memo } from "react";
import Tr from './Tr'
const Table = memo(({ tableData, dispatch }) => {

  return(
    <React.Fragment>
      <table>
        <tbody>
          {Array(tableData.length).fill().map((v, i) => <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch}/>)}
        </tbody>
      </table>
    </React.Fragment>
  )
})
export default Table
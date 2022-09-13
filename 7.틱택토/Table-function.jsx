import React, { memo } from "react";
import Tr from './Tr-function'

const Table = memo(({ onClick, tableData } ) => {

  return(
    <React.Fragment>
      <table onClick={onClick}>
        <tbody>
          {Array(tableData.length).fill().map((v, i) => (<Tr rowData={tableData[i]}/>))}
        </tbody>
      </table>
  </React.Fragment>
  )
})
export default Table;
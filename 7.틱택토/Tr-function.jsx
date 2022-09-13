import React, { memo } from "react";
import Td from './Td-function'

const Tr = memo(({ rowData, rowIndex, dispatch }) => {

  return(
    <React.Fragment>
      <tr>
        {Array(rowData.length).fill().map((v,i) => <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex = {i} cellData={rowData[i]}/>)}
      </tr>
  </React.Fragment>
  )
})

export default Tr
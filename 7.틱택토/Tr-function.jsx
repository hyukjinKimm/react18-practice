import React, { memo } from "react";
import Td from './Td-function'

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  console.log('tr rendered')
  return(
    <React.Fragment>
      <tr>
        {Array(rowData.length).fill().map((v,i) => <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex = {i} cellData={rowData[i]}/>)}
      </tr>
  </React.Fragment>
  )
})

export default Tr
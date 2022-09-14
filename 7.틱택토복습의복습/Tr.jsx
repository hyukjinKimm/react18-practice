import React, { memo } from "react";
import Td from './Td'
const Tr = memo(({ rowIndex, rowData, dispatch }) => {

  return(
    <React.Fragment>
      <tr>      
        {Array(rowData.length).fill().map((v, i) => <Td key={i} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} dispatch={dispatch}/>)}
      </tr>
    </React.Fragment>
  )
})

export default Tr
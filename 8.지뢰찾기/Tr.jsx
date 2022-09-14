import React, { memo, useContext } from "react";
import { TableContext } from "./MineSearch";
import Td from './Td'
const Tr = memo(({ rowIndex }) => {
  const { tableData } = useContext(TableContext)
  return(
    <React.Fragment>
      <tr>
        {tableData[0] && Array(tableData[0].length).fill().map((td, i) => <Td rowIndex={rowIndex} cellIndex={i}/>)}
      </tr>
    </React.Fragment>
  )
})
export default Tr
import React, { memo } from "react";
import Td from './Td-function'

const Tr = memo(({ rowData }) => {

  return(
    <React.Fragment>
      <tr>
        {Array(rowData.length).fill().map((v) => <Td />)}
      </tr>
  </React.Fragment>
  )
})

export default Tr
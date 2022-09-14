import React, { memo } from "react";
import Td from './Td'
const Tr = memo(() => {

  return(
    <React.Fragment>
      <tr>
        <Td />
      </tr>
    </React.Fragment>
  )
})
export default Tr
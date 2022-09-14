import React, { memo } from "react";
import Tr from './Tr'
const Table = memo(() => {

  return(
    <React.Fragment>
      <table>
        <tbody>
          <Tr />
        </tbody>
      </table>
    </React.Fragment>
  )
})
export default Table
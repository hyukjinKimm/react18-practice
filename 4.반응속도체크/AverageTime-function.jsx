import React, {memo} from "react";
const AverageTime = memo(({ result }) => {
    console.log(result)
  return(
    
    <React.Fragment>
      {result.length ? <div>평균 시간: {result.reduce((a, b) => a + b) / result.length}ms</div>:null}
    </React.Fragment>
  )
});

export default AverageTime
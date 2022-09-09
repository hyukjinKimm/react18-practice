import React from "react";
import AverageTime from "./AverageTime-function";
const ResponseCheck = () => {

  const [state, setState] = React.useState('waiting');
  const [message, setMessage] = React.useState('클릭해서 시작하세요!')
  const [result, setResult] = React.useState([]);
  const timeout = React.useRef(null)
  const starttime = React.useRef(null)
  const endtime = React.useRef(null)
  
  const onClick = () => {
    if (state === 'waiting'){
      setState('ready')
      setMessage('초록색이 되면 클릭하세요')
      timeout.current = setTimeout(() => {
        setState('now')
        setMessage('지금 클릭하세요!')
        starttime.current = new Date()
      }, Math.floor(Math.random()*1000 + 2000));

    } else if (state === 'ready') {
        setState('waiting')
        setMessage('성급하시군요. 초록색이 되면 클릭하세요')
        clearTimeout(timeout.current)
    } else if (state === 'now') {
        endtime.current = new Date()
        setState('waiting')
        setMessage('클릭해서 시작하세요!')
        setResult((preResult) => {
          return [...preResult, endtime.current - starttime.current]
        });
    }
  }
  return(
    <React.Fragment>
      <div id="screen" className={state} onClick={onClick}>{message}</div>
      <AverageTime result={result}/>
    </React.Fragment>
  )
}

export default ResponseCheck;
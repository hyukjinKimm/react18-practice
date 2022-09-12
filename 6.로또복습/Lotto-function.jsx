import React, { memo, useState, useRef,  useMemo, useEffect, useCallback } from "react";
import Ball from "./Ball-function";
function getWinNumbers(){
    console.log('번호뽑기')
    const result = []
    const candidates = Array(45).fill().map((v, i) => i+1);
    while (result.length <7 ){
      result.push(candidates.splice(Math.floor(Math.random()*candidates.length), 1)[0])
    }
    const bonus = result.splice(6, 1)[0]
    result.sort((p, c) => p - c )
  
    return [...result, bonus]
      
  }
const Lotto = () => {
  //const lottoNumbers = useMemo(() => getWinNumbers(), [])
  //const [winNumbers, setWinNumbers] = useState(lottoNumbers)
  const [winNumbers, setWinNumbers] = useState(getWinNumbers)
  const [winBalls, setWinBalls] = useState([])
  const [bonus, setBonus] = useState(null)
  const [redo, setRedo] = useState(false)
  const timeouts = useRef([])

  const runTimeOuts = () => {
    for (let i = 0; i < winNumbers.length - 1 ; i ++ ){
        timeouts.current[i] = setTimeout(() => {
          setWinBalls((preWinBalls) => {
            return [...preWinBalls, winNumbers[i]]
          })
        }, (i+1) * 1000);
      } 
    timeouts.current[6] =  setTimeout(() => {
    setBonus(winNumbers[6])
    setRedo(true)
    }, 7000);
  }
  useEffect(() => {
    console.log('실행!')
    runTimeOuts()
    return () => {
      for (let i = 0; i < winNumbers.length; i ++){
        clearTimeout(timeouts.current[i])
      } 
    }
  }, [timeouts.current])
  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers()),
    setWinBalls([]),
    setBonus(null),
    setRedo(false)
    timeouts.current = []
  })

  return (
    <React.Fragment>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </React.Fragment>
  )
}
export default Lotto
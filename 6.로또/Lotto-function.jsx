import React, { memo, useState, useEffect, useRef, useMemo, useCallback } from "react";
import Ball from "./Ball-function";
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }
const Lotto = () => {
  const [winBalls, setWinBalls] = useState([]);
  const lottonumbers = useMemo(() => getWinNumbers(), [])
  const [winNumbers, setWinNumbers] = useState(lottonumbers);
  //const [winNumbers, setWinNumbers] = useState(getWinNumbers);

  const [bonus, setBonus] = useState(null)
  const [redo, setRedo] = useState(false)
  const timeouts = useRef([])

  const runTimeouts = useCallback( () => {
    for(let i = 0; i < winNumbers.length - 1; i ++){
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((preWinBalls) => {
          return [...preWinBalls, winNumbers[i]]
        })
      }, (i + 1) *  1000);
    }
    timeouts.current[6] =setTimeout(() => {
      setBonus(winNumbers[6])
      setRedo(true)
    }, 7000);
  }, []);
  useEffect(()=>{
    console.log('useEffect')
    runTimeouts()
  },[timeouts.current])
  const onClickRedo = () => {
    setWinNumbers(getWinNumbers())
    setWinBalls([])
    setBonus(null)
    setRedo(false)
    timeouts.current = []
  }
  return(
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
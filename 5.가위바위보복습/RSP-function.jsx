import React , {memo, useEffect, useState, useRef }from "react";
const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};
  
const scores = {
    가위 : 1,
    바위: 0,
    보: -1
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(e => e[1] === imgCoord)[0]
}
const RSP = () => {
  const [imgCoord, setImgCoord] = useState('0')
  const [result, setResult] = useState('')
  const [score, setScore] = useState(0)
  const interval = useRef(null)

  useEffect(() => {
    console.log('ho')
    interval.current = setInterval(handChange, 1000);
    return () => {clearInterval(interval.current)}
  }, [imgCoord])
  const handChange = () => {
    if (imgCoord === '0'){
      setImgCoord('-142px')
    }
    else if (imgCoord === '-142px'){
        setImgCoord('-284px')
    }
    else {
        setImgCoord('0') 
    }
  }
  const onClickBtn = (choice)=> () => {
    clearInterval(interval.current)
    const myScore = scores[choice];
    const cpuScore = scores[ computerChoice(imgCoord)];
    console.log('my: ', myScore, 'cpu :', cpuScore)
    if (myScore === cpuScore){ // 비김
      setResult('비겼습니다.')
    } else if ([-1, 2].includes(myScore - cpuScore)){ // 내가 이김
        setResult('이겼습니다.')
        setScore((preScore) => {
          return preScore + 1
        })

    } else{ // 짐
        setResult('졌습니다.')
        setScore((preScore) => {
            return preScore - 1
          })    

    }
    setTimeout(() => {
      interval.current = setInterval(handChange, 500)
    }, 2000);
  }

  return(
    
      <React.Fragment>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </React.Fragment>
    )

}

export default RSP
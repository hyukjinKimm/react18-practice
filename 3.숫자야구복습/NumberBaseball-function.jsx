import React from 'react'
import Try from './Try'
function getNumbers() {
    const array = [];
    while(true) {
      const num = Math.floor(1+  Math.random()*9)
      if (array.length < 5 && !array.includes(num)) {
        array.push(num)
      }
      if(array.length == 4)
        break
    }
    return array
  }
const NumberBaseball = () => {
  const [value, setValue] = React.useState('')
  const [result, setResult] = React.useState('')
  const [numbers, setNumbers] = React.useState(getNumbers)
  const [tries, setTries] = React.useState([])
  const inputRef = React.useRef(null)

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === numbers.join("")){
      setValue('')
      setResult('4스트라이크 입니다. 게임을 다시 시작합니다.');
      setNumbers(getNumbers())
      setTries((preTries) => {
        return [...preTries, { value: value, result: '홈런!'}]
      })
    } else{
        
        if (tries.length >9){
            setValue('')
            setResult('10번 넘게 틀려서 실패~ 정답은 ' + numbers.join(''))
            setNumbers(getNumbers())
            setTries([])
        } else {
         
          let strike = 0
          let ball = 0
          for (var i = 0; i < 4; i++) {
            if (parseInt(value[i]) === numbers[i]){
              strike++
            } else if (numbers.includes(parseInt(value[i]))){
              ball ++
            }
          }
          setValue('')
          setResult('')
          setTries((preTries) => {
            return [...preTries, {value: value, result:  strike + ' 스트라이크 ' + ball + ' 볼 입니다. '}]
          })
        }

    }
    inputRef.current.focus()
  }
  const onChange = (e) => {
    setValue(e.target.value);
    inputRef.current.focus();

  }

  return (
    <React.Fragment>
        <div>{result}</div>
        <form onSubmit={onSubmit}>
          <input maxLength={4} type="text" ref={inputRef} value={value} onChange={onChange}/>
          <button>등록</button>
        </form>
        <div>시도: {tries.length}</div>
        <div><ul>{tries.map((v, i) => {
          return <Try key={`${i + 1} 차 시도`} tryInfo={v}/>
        })}</ul></div>    
    </React.Fragment>
  )
}

export default NumberBaseball
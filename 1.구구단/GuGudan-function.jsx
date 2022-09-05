const React = require('react')

const GuGudan =  () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('')
    const [result, setResult] = React.useState('')
    const inputRef = React.useRef(null)

    
    const onSubmit = (e) => {
        e.preventDefault()
        if(first * second === parseInt(value)){
           
            setResult(`${value}는 정답입니다.`)
            setFirst(Math.ceil(Math.random() * 9))
            setSecond(Math.ceil(Math.random() * 9))
            setValue('')
            inputRef.current.focus()
        } else {
            setResult('아닌데 ㅋ')
            setValue('')
            inputRef.current.focus()
        }
      } 
      const onChange = (e) => {
        setValue(e.target.value)
      }
      return (
        <React.Fragment>
            <div>{first}곱하기{second}는?</div>
            <form onSubmit={onSubmit}>
              <input ref={inputRef} type="number" value={value} onChange={onChange}/>    
              <button type='submit'>입력</button>
            </form>
            <div>{result}</div>
        </React.Fragment>
      )
      
}

module.exports =  { GuGudan } ;


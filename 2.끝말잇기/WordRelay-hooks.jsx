const React = require('react');

const WordRealy = () => {
  const [word, setWord] = React.useState('김혁진');
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null);

  const onSubmit = (e) => { 
    e.preventDefault()
    if (word[word.length -1] == value[0]){
        setWord(value);
        setResult(value + ' 는 가능합니다.')
        setValue('')

    } else{
        setResult(value + ' 는 불가능합니다.')
        setValue('')
    }
    inputRef.current.focus();
  }

  const onChange = (e) => {
    setValue(e.target.value)
    inputRef.current.focus(); 
  }
  return (
    <React.Fragment>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="wordInput">단어를 입력하세요</label>
        <input id='wordInput' className='wordInput' ref={inputRef} type="text" value={value} onChange={onChange} />
        <button>확인</button>
      </form>
      <div>{result}</div>
    </React.Fragment>
  )
}

module.exports = { WordRealy }
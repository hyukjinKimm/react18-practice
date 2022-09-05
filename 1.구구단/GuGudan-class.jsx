const React = require('react')
const { Component } = React;

class GuGudan extends Component {

      
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: ''
  }
  onSubmit = (e) => {
    e.preventDefault()
   
   if(this.state.first * this.state.second === parseInt(this.state.value) ){
     this.setState((prestate) => {
      return {
        result: `${prestate.value}는 정답입니다.`,
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
     }}
     )
     this.input.focus();
   }
   else{
    this.setState({
      result: '아닌데 ㅋ',
      value: ''
    })
    this.input.focus();
  }
  }
  onChange = (e) => {
    this.setState({ value: e.target.value})
  }
  input;
  render() {
    return(
      <React.Fragment>
        <div>{this.state.first}곱하기{this.state.second}는?</div>
        <form onSubmit={this.onSubmit}>
          <input ref = {(c) => {this.input = c;}}type="number" value={this.state.value} onChange={this.onChange}/>    
          <button type='submit'>입력</button>
        </form>
        <div>{this.state.result}</div>
      </React.Fragment>
    );
  }
}

module.exports = GuGudan ;


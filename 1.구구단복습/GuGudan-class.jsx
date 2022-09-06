const React = require('react')
const { Component } = React
class GuGudan extends Component {
  state = {
    first : Math.ceil(Math.random() * 9),
    second : Math.ceil(Math.random() * 9), 
    value: '',
    result: ''
  };

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.first * this.state.second == parseInt(this.state.value)) {
      this.setState((prestate) => {
        return {
        first : Math.ceil(Math.random() * 9),
        second : Math.ceil(Math.random() * 9), 
        value: '',
        result: prestate.value + ' 는 정답입니다.'
      }});
      this.input.focus()
    } else {
      this.setState({
        value: '',
        result: '틀렷지롱ㅋ'
      })
    }
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
    this.input.focus()
  }

  input;

  render() {
    return(
      <React.Fragment>
        <div>{this.state.first} 곱하기 {this.state.second}는?</div>
        <form onSubmit={this.onSubmit}>
          <input ref={(c) => {this.input = c;}} type="number" value={this.state.value} onChange={this.onChange}/>
          <button type='submit'>확인</button>
        </form>
        <div>{this.state.result}</div>
      </React.Fragment>
    )
  }
}

module.exports = GuGudan
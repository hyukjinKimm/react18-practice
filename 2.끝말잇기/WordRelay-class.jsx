const React = require('react')
const { Component } = React;

class WordRealy extends Component {

    state = {
        word: '김혁진',
        value: '',
        result: ''
    }
    onSubmit = (e) => {
      e.preventDefault();
      if (this.state.word[this.state.word.length-1] == this.state.value[0]){
        this.setState((preState) => {
          return {
            word: this.state.value,
            value: '',
            result: '가능'
          }
        })
      } else{
        this.setState((preState) => {
          return {
            value: '',
            result: '불가능'
          }
        })  
      }
      this.input.focus();
    }
    onChange = (e) => {
      this.setState({value: e.target.value});
      this.input.focus();
    }
    input;
    render() {
      return (
        <React.Fragment>
          <div>{this.state.word}</div>
          <form onSubmit={this.onSubmit}>
            <input ref={(c)=>{this.input=c}} type="text" value={this.state.value} onChange={this.onChange} />
            <button>등록</button>
          </form>
          <div>{this.state.result}</div>
        </React.Fragment>
      )
    }
}

module.exports = WordRealy;


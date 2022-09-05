const React = require('react')
const { Component } = React;

class WordRealy extends Component {

    state = {
        text: 'hello'
    }
    
    render() {
      return <h1>{this.state.text}</h1>
    }
}

module.exports = WordRealy;


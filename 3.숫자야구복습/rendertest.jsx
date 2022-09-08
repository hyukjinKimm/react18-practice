import React, { PureComponent } from 'react'

class Test extends PureComponent {

  state={
    counter: 0,
    array: []
  }
  
  onClick = () => {
    this.setState({
      array: []
    });
  }

  render(){
    console.log('렌더링', this.state.counter)
    return(
      <React.Fragment>
        <button onClick={this.onClick}>클릭</button>
      </React.Fragment>
    )
  }
}
export default Test
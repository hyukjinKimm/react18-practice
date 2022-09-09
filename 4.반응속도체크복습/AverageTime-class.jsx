import React, { PureComponent } from "react";

class AverageTime extends PureComponent {
  render(){
    return(
      <React.Fragment>
        {this.props.result.length ? <div> 평균시간: {this.props.result.reduce((a,b) => a+b) /  this.props.result.length}ms </div>: null}
      </React.Fragment>
    )
  }
}
export default AverageTime
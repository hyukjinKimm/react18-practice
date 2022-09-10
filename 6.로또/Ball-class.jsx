import React, { PureComponent } from "react";

class Ball extends PureComponent{

  render() {
    const { number } = this.props
    let background;
    if (number <= 10) {
      background = 'red';
    } else if (number <= 20) {
      background = 'orange';
    } else if (number <= 30) {
      background = 'yellow';
    } else if (number <= 40) {
      background = 'blue';
    } else {
      background = 'green';
    }
  
    return (
      <React.Fragment>
    <div className="ball" style={{ background }}>{number}</div>
      </React.Fragment>
    )
  }
}
export default Ball
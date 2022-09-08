import React, { PureComponent } from 'react'


class Average extends PureComponent {


  render(){
    console.log('pure렌더')
    return (
      <React.Fragment>
        {this.props.result.length ? <div>평균시간: {this.props.result.reduce((a,c) => a+c,0) / this.props.result.length}m</div> : null}
      </React.Fragment>
    )

  }

}
export default Average
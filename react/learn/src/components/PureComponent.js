// PureComponent组件其实就是定制化后的shouldComponentUpdate的加强
import React, { Component, PureComponent } from 'react'

class PureComponentTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: [{body: 'react hook'}, {body: 'vue'}],
      // name: 'kyle'
    }
    setTimeout(() => {
      this.setState({
        comment: [{body: 'react hook'}, {body: 'vue'}],
        // name: 'kyle'
      })
    }, 2000);
  }
  render () {
    return (
      <div>
        {this.state.comment.map((c, i) => (
          <Comment data={c} key={i}/>
        ))}
      </div>
    )
    // return <Comment data={this.state.name}/>
  }
}
class Comment extends PureComponent {
  constructor (props) {
    super(props)
  }
  // shouldComponentUpdate (nextProp) {
  //   console.log(nextProp)
  //   if (nextProp.data.body === this.props.data.body) {
  //     console.log(false)
  //     return false
  //   }
  //   console.log(true)
  //   return true
  // }
  render () {
    console.log('render')
    return (
      <div>
        {/* <p>{this.props.data}</p> */}
        <p>{this.props.data.body}</p>
      </div>
    )
  }
}

export default PureComponentTest
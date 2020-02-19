import React, {Component} from 'react'

// 容器组件
export default class CommentVs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: []
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        comment: [{body: 'react hook'}, {body: 'vue'}]
      })
    }, 3000);
  }
  render () {
    return (
      <div>
        {this.state.comment.map((c, i) => (
          <Comment data={c} key={i}/>
        ))}
      </div>
    )
  }
}

// 展示组件
function Comment ({data}) {
  return (
    <div>
      <p>{data.body}</p>
    </div>
  )
}
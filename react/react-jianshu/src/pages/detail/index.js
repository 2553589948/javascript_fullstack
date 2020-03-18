import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    let action = actionCreators.getDetail(id)
    action(dispatch)
  }
})

export default connect(mapState, mapDispatch)(Detail)
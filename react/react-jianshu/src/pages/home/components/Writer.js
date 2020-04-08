import { connect } from 'react-redux'
import React, { Component } from 'react'
import { actionCreators } from '../store'
import { WriterWrapper, Header, WriterList, WriterItem, WriterInfo } from '../style'

class Writer extends Component {
  render () {
    return (
      <WriterWrapper>
        <Header>
          <div className="title">推荐作者</div>
          <div className="change" onClick={() => this.props.change(this.props.writerPage, this.props.total)}>换一批</div>
        </Header>
        <WriterList>
          {
            this.props.list.map(item => (
              <WriterItem key={item.get('writerId')}>
                <img className="writer-pic" src={item.get('imgUrl')} alt="" />
                <WriterInfo>
                  <p className="name">{item.get('name')}</p>
                  <p className="info">写了{item.get('wordCount')}字 · {item.get('likesCount')}喜欢</p>
                </WriterInfo>
                <div className="follow">+关注</div>
              </WriterItem>
            ))
          }
        </WriterList>
      </WriterWrapper>
    )
  }
}

const mapState = state => ({
  writerPage: state.home.get('writerPage'),
  list: state.home.get('writerList'),
  total: state.home.get('writerTotal')
})
const mapDispatch = dispatch => ({
  change(page, total) {
    if (page > total) {
      dispatch(actionCreators.getWriterList(1))
    }
    let action = actionCreators.getWriterList(page)
    action(dispatch)
  }
})
export default connect(mapState, mapDispatch)(Writer)
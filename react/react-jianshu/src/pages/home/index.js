import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { 
  HomeWrapper, 
  HomeLeft, 
  HomeRight,
  BackTop
} from './style'

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData(this.props.page)
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload-images.jianshu.io/upload_images/11864358-622c38825ebb854e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll 
          ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> 
          : null
        }
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  showScroll: state.home.get('showScroll'),
  page: state.home.get('articlePage')
})

const mapDispatch = (dispatch) => ({
  changeHomeData(page) {
    const action = actionCreators.getHomeInfo(page)
    // dispatch(action)
    action(dispatch)
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)
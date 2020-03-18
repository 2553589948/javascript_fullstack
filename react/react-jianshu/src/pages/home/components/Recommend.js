import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
  render () {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return (
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.home.get('recommendList')
})

export default connect(mapState, null)(Recommend)
import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={"/detail/" + item.get('id')}>
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.home.get('articleList'),
  page: state.home.get('articlePage')
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    // dispatch()
   let action = actionCreators.getMoreList(page)
   action(dispatch)
  }
})

export default connect(mapState, mapDispatch)(List)
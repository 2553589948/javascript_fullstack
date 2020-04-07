import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore, NoMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends Component {
  render() {
    const { list, getMoreList, page, total } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={"/detail/" + item.get('artid')} target="_blank">
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('artDesc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        {page > total ? <NoMore>人家也是有底线的~~</NoMore> : <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>}
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.home.get('articleList'),
  page: state.home.get('articlePage'),
  total: state.home.get('total')
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    // dispatch()
   let action = actionCreators.getMoreList(page)
   action(dispatch)
  }
})

export default connect(mapState, mapDispatch)(List)
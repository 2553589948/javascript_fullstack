import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const changeHomeData = (result, nextPage) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  total: result.totalPage,
  nextPage
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = (page) => {
  return (dispatch) => {
    axios.get('http://localhost:3000/home/getHomeData?page=' + page)
    .then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        const result = res.data.data
        dispatch(changeHomeData(result, page + 1))
      }
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('http://localhost:3000/home/getHomeData?page=' + page)
    .then((res) => {
      const result = res.data.data.articleList
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show: show
})
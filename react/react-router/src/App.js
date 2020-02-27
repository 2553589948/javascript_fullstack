import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

// react router其中包含三种类型 1. 路由组件 2.路由匹配组件 3.导航组件
// 路由组件：BrowserRouter HashRouter
// 路由匹配组件: Route Switch
// 导航组件：Link

function App() {
  return (
    <Router>
      <div>
        hello react-router
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topic" component={Topic}/>
      </div>
    </Router>
  )
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/topic">topic</Link>
      </li>
    </ul>
  )
}

function Home () {
  return <h2>Home主页</h2>
}

function About () {
  return <h2>关于</h2>
}

function Topic (props) {
  // console.log(props)
  const {match} = props
  return (
    <div>
      <h2>话题</h2>
      <ul>
        <li>
          {/* react中的二级路由 */}
          <Link to={`${match.url}/components`}>subTopic</Link>
        </li>
        <li>
          {/* react中的二级路由 */}
          <Link to={`${match.url}/props-v-state`}>subTopic2</Link>
        </li>
      </ul>

      {/* topic子组件 */}
      <Route path={`${match.path}/:id`} component={HotTopic} />

      {/* topic子组件 */}
      <Route exact path={match.path} render={() => <h4>please select a topic</h4>} />
    </div>
  )
}

function HotTopic ({match}) {
  return <h3>请求到的参数: {match.params.id}</h3>
}

export default App;

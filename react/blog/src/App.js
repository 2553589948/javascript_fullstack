import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Login from './pages/admin/login'
import routes from './Router'
import requireLogin from './requireLogin'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Redirect to="/web/index" />}></Route>
          <Route path="/login" component={Login} />
          {
            routes.map((route, i) => (
              <Route key={i} path={route.path} component={
                route.path.includes('/admin') ? requireLogin(route.component) : route.component
              }></Route>
            ))
          }
        </div>
      </Router>
    )
  }
}

export default App;

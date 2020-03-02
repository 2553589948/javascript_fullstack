import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import routes from '../../../Router/admin'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>
        {
          routes.map(({path, key, component, ...props}, index) => (
            <Route exact key={index} path={path} component={component} {...props} />
          ))
        }
      </div>
    );
  }
}

export default Index
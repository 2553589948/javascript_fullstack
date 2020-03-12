import React, { Component } from 'react'
import { 
  Headerstyle,
  Logo
} from './style'

class Header extends Component {
  render() {
    return (
      <Headerstyle>
        <Logo />
      </Headerstyle>
    );
  }
}

export default Header
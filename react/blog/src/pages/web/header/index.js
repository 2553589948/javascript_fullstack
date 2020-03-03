import React, { Component } from 'react'
import {Layout, Row, Col, Menu} from 'antd'
import {
  SmileOutlined,
  HomeOutlined
} from '@ant-design/icons'
import {Link} from 'react-router-dom'

import menus from '../../../Router/web'
import './style.less'

const {Header}  = Layout

class HeaderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  handleNav = (index) => {
  }

  render() {
    const key = sessionStorage.getItem('webKey') || '0'
    const list = menus.filter(v => v.menu)
    const menuList = list.map((item, i) => {
      return <Menu.Item key={i} onClick={this.handleNav(i)}>
        <Link to={item.path}>
          {/* {item.icon} */}
          <HomeOutlined />
          <span className="nav-text">{item.title}</span>
        </Link>
      </Menu.Item>
    })
    return (
      <Header className="header-container">
        <Row>
          <Col lg={{span: 4}} md={{span: 4}} xs={{span: 0}}>
            <div className="logo">
              <SmileOutlined style={{marginRight: 5}} />
              kyle的博客
            </div>
          </Col>
          <Col lg={{span: 14}} md={{span: 14}} xs={{span: 24}} className="mobile">
            <Menu mode="horizontal" defaultSelectedKeys={[key]}>
              { menuList }
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default HeaderCustom
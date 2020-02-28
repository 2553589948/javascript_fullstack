import React from 'react'
import {Layout, Row, Col, Avatar, Input, Menu, Dropdown, Badge} from 'antd'
import { UserOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons'
import {Route, Link} from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout
class PageLayout extends React.Component {
  render () {
    return (
      <Layout>
        <Header style={{color: '#fff', textAlign: 'center', fontWeight: "bold", fontSize: '16px'}}>
          <Row>
            <Col span={10}>React-antd实践</Col>
            <Col span={8}>
              <Input placeholder="请输入你想要的..." />
            </Col>
            <Col span={6}>
              <Avatar icon={<UserOutlined/>} style={{backgroundColor: '#666', marginRight: 20}}></Avatar>
              <Dropdown overlay={DropMenu}>
                <a>
                  hi,kyle<DownOutlined/>
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout style={{position: "relative"}}>
          <Sider>
            <Menu style={{width: 256, height: '90vh', overflow: 'auto', minWidth: 256}} mode="inline" defaultOpenKeys={['sub1']} defaultSelectedKeys={['sub11']}>
              <Menu.SubMenu key="sub1" title={<span><SmileOutlined/>部分UI组件实践</span>}>
                <Menu.Item key="sub11">Option 1</Menu.Item>
                <Menu.Item key="sub12">Option 2</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu key="sub2" title={<span><SmileOutlined/>React</span>}>
                <Menu.Item key="sub21">Option 1</Menu.Item>
                <Menu.Item key="sub22">Option 2</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content style={{marginLeft: '5%'}}>
            test
          </Content>
          <Footer style={{position: "absolute", bottom: 0, left: 256, right: 0, textAlign: "center"}}>
            footer
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

function DropMenu() {
  return (
    <Menu>
      <Menu.Item key="0">
        <a href="#">修改密码</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">退出登录</a>
      </Menu.Item>
    </Menu>
  )
}

export default PageLayout
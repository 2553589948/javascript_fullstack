import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Card, Divider, Typography} from 'antd'
import {
  GithubOutlined,
  QqOutlined
} from '@ant-design/icons';
import './style.less'
const { Paragraph } = Typography;

class About extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  render() {
    return (
      <div className="about-container">
        <Card style={{padding: 24}}>
          <Divider orientation="left">Blog</Divider>
          <p>一直基于 vue 写业务，所以博客选用了 react + react-router + mbox 这套技术栈，借此熟悉下 react 开发模式</p>
          <p>纯函数式开发，很甜</p>
          <p>前端：react + antd + react-router + es6 + webpack + axios</p>
          <p>服务端：koa2 + mysql + sequelize</p>
          <p className="code">源码戳这里</p>
          <p>
            <Link to="" className="link">web端</Link>
          </p>
          <p>
            <Link to="" className="link">node服务端</Link>
          </p>
          <Divider orientation="left">Me</Divider>
          <Typography>
            <Paragraph>
              <ul className="about-list">
                <li>姓名：kyle</li>
                <li>
                  <GithubOutlined style={{fontSize: 16}} />
                  ：
                  <a href="https://github.com/2553589948" target="_blank" className="link">github</a>
                </li>
                <li>
                  联系方式：
                  <span>18790216889</span>
                  <Divider type="vertical"></Divider>
                  <QqOutlined style={{fontSize: 16}} />
                  ：
                  <a href="mailto:2553589948@qq.com">2553589948@qq.com</a>
                </li>
                <li>坐标：南昌市</li>
                <li>
                  学历专业：本科
                  <Divider type="vertical"></Divider>
                  网络
                </li>
                <li>
                  skill:
                  <ul>
                    <li>前端：Vue、React、ES6/7/8、Echat、Axios</li>
                    <li>服务端：Node、Koa2</li>
                    <li>数据库：Mysql</li>
                    <li>其他：webpack、git、nginx</li>
                  </ul>
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </Card>
      </div>
    );
  }
}

export default About
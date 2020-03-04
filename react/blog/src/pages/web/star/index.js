import React, { Component } from 'react'
import {List, Typography} from 'antd'
import './style.less'

class Star extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "createdAt": "2019-04-10 10:19",
          "updatedAt": "2019-04-10 10:19",
          "id": 3,
          "title": "React 16 加载性能优化指南",
          "url": "https://juejin.im/post/5b506ae0e51d45191a0d4ec9"
        },
        {
          "createdAt": "2019-03-30 14:02",
          "updatedAt": "2019-03-30 14:02",
          "id": 2,
          "title": "CentOS7 系统目录详解和常用命令[文件和目录]",
          "url": "https://blog.csdn.net/qq_22860341/article/details/81363655"
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="star-container" style={{padding: '0 30px 20px', backgroundColor: '#fff'}}>
        <List
          style={{border: 'none'}}
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
            size: "small"
          }}
          size="large"
          header={<div style={{fontSize: '1.2em', color: '#000'}}>文章收藏</div>}
          bordered
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item style={{paddingLeft: 0}}>
              <Typography.Text style={{color: '#1890ff'}}>
                <a href={item.url}>{item.title}</a>
              </Typography.Text>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Star
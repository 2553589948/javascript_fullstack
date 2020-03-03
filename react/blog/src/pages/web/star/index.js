import React, { Component } from 'react'
import {List, Typography} from 'antd'
import './style.less'

class Star extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'React 16 加载性能优化指南'
        },
        {
          title: 'CentOS7 系统目录详解和常用命令[文件和目录]'
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
              <Typography.Text style={{color: '#1890ff'}}>{item.title}</Typography.Text>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Star
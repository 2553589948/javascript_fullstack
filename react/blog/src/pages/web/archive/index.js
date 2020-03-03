import React, { Component } from 'react'
import {Timeline} from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';

class Archive extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '1',
          createTime: '2019-11-11',
          title: 'blog 迁移到 http://xiangxi.red/doc'
        },
        {
          id: '2',
          createTime: '2019-04-15',
          title: 'event loop 回答得最难受的一次面试'
        },
        {
          id: '3',
          createTime: '2019-04-13',
          title: '面试题的细嚼慢咽，真香啊'
        },
        {
          id: '4',
          createTime: '2019-04-10',
          title: 'JS 数组去重'
        },
        {
          id: '5',
          createTime: '2019-03-31',
          title: 'node + koa + mysql 搭建博客 server 端'
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="archive-container" style={{backgroundColor: '#fff', padding: 24}}>
        <Timeline>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '14px' }} />} color="red" style={{fontSize: 20}}>2019</Timeline.Item>
          {
            this.state.data.map((item, i) => (
              <Timeline.Item key={i}>
                <div style={{color: '#1890ff'}}>
                  <span style={{marginRight: 20}}>{item.createTime}</span>
                  <span>{item.title}</span>
                </div>
              </Timeline.Item>
            ))
          }
        </Timeline>
      </div>
    );
  }
}

export default Archive
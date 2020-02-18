import React, {Component} from 'react'

function Shopcart (props) {
  return (
    <table>
      <tbody>
        {props.data.map(d => (
          <tr key={d.text}>
            <td>{d.text}</td>
            <td>
              <button>-</button>
              {d.count}
              <button onClick={() => props.addCount(d)}>+</button>
            </td>
            <td>￥{d.price * d.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      goods: [
        {
          id: 1,
          text: '你不知道的javascript',
          price: 66
        },
        {
          id: 2,
          text: '你不知道的vue',
          price: 59
        },
        {
          id: 3,
          text: '你不知道的react',
          price: 63
        }
      ],
      cart: [],
      history: []
    }
    this.addGoods = this.addGoods.bind(this)
  }
  textChange = e => {
    console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
  }
  addGoods () {
    // console.log(123)
    this.setState(prevState => ({
      goods: [...prevState.goods, {id: prevState.id, text: prevState.text, price: prevState.price}]
    }))
  }
  addCount = item => {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === item.text)
    newCart.splice(idx, 1, {...item, count: item.count + 1})
    this.setState({
      cart: newCart,
      history: [...this.state.history, newCart]
    })
  }
  addToCart (good) {
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === good.text)
    const item = newCart[idx]
    if (item) {
      newCart.splice(idx, 1, {...item, count: item.count + 1})
    } else {
      newCart.push({...good, count: 1})
    }
    this.setState({
      cart: newCart,
      history: [...this.state.history, newCart]
    })
  }
  go (his) {
    this.setState({
      cart: his
    })
  }
  render () {
    const title = this.props.title ? <h1>{this.props.title}</h1> : null
    return (
      <div>
        {title}
        <div>
          <input type="text" value={this.state.text} onChange={e => this.textChange(e)} />
          <button onClick={this.addGoods}>添加商品</button>
        </div>
        {/* 列表渲染 */}
        <ul>
          {this.state.goods.map((item, index) => {
            return (
              <li key={index}>
                {item.text}
                <button onClick={() => this.addToCart(item)}>加购</button>
              </li>
            )
          })}
        </ul>
        {/* 购物车列表 传递函数用于子组件和父组件交互 */}
        <Shopcart data={this.state.cart} addCount={this.addCount}></Shopcart>

        {this.state.history.length > 0 ? <p>历史操作</p> : null}
        {this.state.history.length > 0 ? <button key="-1" onClick={() => this.setState({cart: []})}>0</button> : null}
        {this.state.history.map((his, index) => (
          <button key={index} onClick={() => this.go(his)}>
            {index + 1}
          </button>
        ))}
      </div>
    )
  }
}
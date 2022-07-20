// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {total, isHead, heads, tails} = this.state
    const imgUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="head-tails-paragraph">Heads (or) Tails</p>
          <div>
            <img src={imgUrl} alt="toss result" className="image" />
          </div>

          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score">Total: {total}</p>
            <p className="score">Heads: {heads}</p>
            <p className="score">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

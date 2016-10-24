import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <h1>Time elapsed: {this.state.count} second{this.state.count !== 1 && 's'}</h1>
    )
  }
}

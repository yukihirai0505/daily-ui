import React, { Component } from 'react'
import styled from 'styled-components'

const Blog = styled.h1`
  text-align: center;
  color: skyBlue;
`

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Blog>AppDividend</Blog>
      </div>
    )
  }
}

export default styled(App)`
  background-color: #232020;
  border-radius: 5px;
`

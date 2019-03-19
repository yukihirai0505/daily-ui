import React, { Component } from 'react'
import styled from 'styled-components'

const Blog = styled.h1`
  text-align: center;
  color: skyBlue;
`

const Button = styled.button`
  background: ${props => (props.primary ? 'green' : 'white')};
  color: ${props => (props.primary ? 'white' : 'green')};
  font-size: 1.5em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 5px;
  margin: 10px;
`

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Blog>AppDividend</Blog>
        <Button primary="styled">Styled</Button>
        <Button>Plain</Button>
      </div>
    )
  }
}

export default styled(App)`
  background-color: #232020;
  border-radius: 5px;
`

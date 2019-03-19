import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import SignUp from './SignUp'
import { createGlobalStyle } from 'styled-components'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
  body {
      background: #eddb53;
      color: white;
      padding: 0;
      margin: 0;
      font-family: cursive;
  }
`

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <SignUp />
  </Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

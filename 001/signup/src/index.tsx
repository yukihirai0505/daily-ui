import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import SignUp from './SignUp'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
  ${reset}
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

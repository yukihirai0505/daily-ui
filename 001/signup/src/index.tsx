import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import SignUp from './components/pages/SignUp'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff');
  font-family: 'San Francisco', sans-serif;
  font-weight: 400;
  font-size: 15px;
`

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <SignUp className="container" />
  </Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

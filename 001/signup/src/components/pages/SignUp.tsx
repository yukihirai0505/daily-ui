import React, { Component } from 'react'
import { Header } from '../organisms/Header'
import { Footer } from '../organisms/Footer'
import styled from 'styled-components'

const SignUp: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div className={props.className}>
      <Header />
      <main>SignUp</main>
      <Footer />
    </div>
  )
}

export default styled(SignUp)`
  // background-color: #232020;
  // border-radius: 5px;
`

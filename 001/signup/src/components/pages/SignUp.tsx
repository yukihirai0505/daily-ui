import React, { Component } from 'react'
import styled from 'styled-components'

const Head = styled.div`
  text-align: center;
  color: skyBlue;
`

interface ButtonProps {
  primary?: boolean
}

const Button = styled.div<ButtonProps>`
  background: ${props => (props.primary ? 'green' : 'white')};
  color: ${props => (props.primary ? 'white' : 'green')};
  font-size: 1.5em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 5px;
  margin: 10px;
`

const SignUp: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div className={props.className}>
      <Head>AppDividend</Head>
      <Button primary={true}>Styled</Button>
      <Button>Plain</Button>
    </div>
  )
}

export default styled(SignUp)`
  // background-color: #232020;
  // border-radius: 5px;
`

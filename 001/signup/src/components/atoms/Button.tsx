import React, { Component } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  primary?: boolean
}

export const Button = styled.div<ButtonProps>`
  background: ${props => (props.primary ? 'green' : 'white')};
  color: ${props => (props.primary ? 'white' : 'green')};
  font-size: 1.5em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 5px;
  margin: 10px;
`

import React, { Component } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  borderRadius?: string
  margin?: string
  width?: string
}

export const Button = styled.button<ButtonProps>`
  background: black;
  color: white;
  padding: 1.25em 0.5em;
  border: 2px solid black;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  margin: ${props => (props.margin ? props.margin : '10px')};
  width: ${props => (props.width ? props.margin : '100%')};
  letter-spacing: 0.1em;
  font-size: 0.75em;
  &:hover {
    cursor: pointer;
  }
`

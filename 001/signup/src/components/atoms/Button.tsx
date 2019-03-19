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
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
  margin: ${({ margin }) => (margin ? margin : '10px')};
  width: ${({ width }) => (width ? width : '100%')};
  letter-spacing: 0.1em;
  font-size: 0.75em;
  &:hover {
    cursor: pointer;
  }
`

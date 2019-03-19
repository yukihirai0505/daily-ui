import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '../atoms/Button'

const FooterStyle = styled.footer`
  text-align: center;
  color: skyBlue;
`

export const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <FooterStyle>
      <Button primary={true}>Styled</Button>
      <Button>Plain</Button>
    </FooterStyle>
  )
}

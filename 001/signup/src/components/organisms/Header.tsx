import React, { Component } from 'react'
import styled from 'styled-components'

const Head = styled.header`
  text-align: center;
  color: skyBlue;
`

export const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return <Head>AppDividend</Head>
}

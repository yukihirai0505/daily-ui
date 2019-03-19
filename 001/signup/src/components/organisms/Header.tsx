import React, { Component } from 'react'
import styled from 'styled-components'

const Head = styled.header`
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
`

const HeadLine = styled.h2``

export const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <Head>
      <HeadLine>Sign Up Image</HeadLine>
    </Head>
  )
}

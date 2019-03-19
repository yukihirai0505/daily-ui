import React, { Component } from 'react'
import styled from 'styled-components'
import topImage from '../../images/top.jpg'

const Head = styled.header`
  background-color: #666;
  background-image: url(${topImage});
  background-size: cover;
  text-align: center;
  font-size: 35px;
  color: white;
  height: 350px;
`

const HeadLine = styled.h2``

export const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <Head>
      <HeadLine />
    </Head>
  )
}

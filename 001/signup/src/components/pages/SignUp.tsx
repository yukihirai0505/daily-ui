import React, { Component } from 'react'
import { Header } from '../organisms/Header'
import { Footer } from '../organisms/Footer'
import { Button } from '../atoms/Button'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface SectionProps {
  width: string
  margin?: string
  fontSize?: string
}

const Section = styled.section<SectionProps>`
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  text-align: center;
  width: ${props => props.width};
  font-size: ${props => (props.fontSize ? props.fontSize : '15px')};
  font-weight: 600;
`

interface LinkProps {
  isBtn?: boolean
}

const Link = styled.a<LinkProps>`
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: ${props => (props.isBtn ? '3px' : '0')};
  border: ${props => (props.isBtn ? '1px solid gray' : 'none')};
  border-radius: ${props => (props.isBtn ? '2px' : '0')};
  &:hover {
    cursor: pointer;
  }
`

const HR = styled.div`
  width: 100%;
  height: 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  text-align: center;
`

const HRMessage = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: gray;
  background-color: #fff;
  padding: 0 10px;
`

const SignUp: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div className={props.className}>
      <Header />
      <main>
        <Section width="85%">
          <Button borderRadius="0px" margin="50px 0 10px 0">
            <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
          </Button>
          <HR>
            <HRMessage>OR</HRMessage>
          </HR>
          <Link href="/">CREATE A NEW ACCOUNT</Link>
        </Section>
        <Section width="100%" margin="30px 0 0 0" fontSize="12px">
          Already have an account?{'  '}
          <Link href="/" isBtn={true}>
            Login
          </Link>
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default styled(SignUp)`
  // background-color: #232020;
  // border-radius: 5px;
`

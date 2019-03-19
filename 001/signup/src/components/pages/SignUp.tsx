import React, { Component } from 'react'
import { Header } from '../organisms/Header'
import { Footer } from '../organisms/Footer'
import { Button } from '../atoms/Button'
import styled from 'styled-components'

interface SectionProps {
  width: string
}

const Section = styled.section<SectionProps>`
  text-align: center;
  width: ${props => props.width};
  padding: 0 20px;
`

const Link = styled.a`
  display: block;
`

const HR = styled.div`
  /* padding: 0px 10px; */
  /* margin: 10px; */
  width: 100%;
  height: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  text-align: center;
`

const HRMessage = styled.span`
  font-size: 10px;
  background-color: #fff;
  padding: 0 10px;
`

const SignUp: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div className={props.className}>
      <Header />
      <main>
        <Section width="280px">
          <Button primary={true}>Styled</Button>
          <HR>
            <HRMessage>Section Title</HRMessage>
          </HR>
          <Link as="a" href="/">
            CREATE A NEW ACCOUNT
          </Link>
        </Section>
        <section>
          Already have an account?{' '}
          <Link as="a" href="/">
            Login
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default styled(SignUp)`
  // background-color: #232020;
  // border-radius: 5px;
`

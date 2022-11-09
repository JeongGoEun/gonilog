import React from 'react'
import styled from '@emotion/styled'
import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Container = styled.div`
  margin: 0 10rem;
`

const Content = styled.main`
  width: 100%;
  min-height: 100vh;
`

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer />
    </>
  )
}

export default Layout

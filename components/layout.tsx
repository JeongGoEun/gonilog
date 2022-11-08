import React from 'react'
import styled from '@emotion/styled'

import Footer from './footer'
import Header from './header'
import SubMenu from './sub-menu'

type Props = {
  children: React.ReactNode
}

const Container = styled.div`
  margin: 0 10rem;
  display: flex;
  border: #92999c 1px solid;
  border-radius: 10px;
`

const Content = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 1.5rem 0;
`

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>
        <SubMenu />
        <Content>{children}</Content>
      </Container>
      <Footer />
    </>
  )
}

export default Layout

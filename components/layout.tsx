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
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

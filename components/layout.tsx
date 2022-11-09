import React from 'react'
import styled from '@emotion/styled'

import Footer from './footer'
import Header from './header'
import TagArea from './tag-area'

type Props = {
  children: React.ReactNode
}

const Container = styled.div`
  margin: 0 10rem;
`

const Content = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
`

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>
        <TagArea />
        <Content>{children}</Content>
      </Container>
      <Footer />
    </>
  )
}

export default Layout

import Footer from './footer'
import Header from './header'
import styled from '@emotion/styled'

type Props = {
  children: React.ReactNode
}

const Container = styled.div`
  padding: 0 10rem;
`

const Content = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: #92999c 1px solid;
  border-radius: 10px;
`

export default function Layout({ children }: Props) {
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

import styled from '@emotion/styled'
import type { AppProps } from 'next/app'

const AboutContaier = styled.div``
const About = ({ Component, pageProps }: AppProps) => {
  return (
    <AboutContaier>
      <div>이미지 사진</div>
      <div>간략한 소개</div>
      <div>깃헙, 노션, 메일</div>

      <div>Skil Set</div>
    </AboutContaier>
  )
}

export default About

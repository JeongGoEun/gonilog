import styled from '@emotion/styled'

export default function Footer() {
  const FooterContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 2rem 10rem;
    justify-content: center;
    align-items: center;

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      font-size: 13px;
    }
  `

  return (
    <FooterContainer>
      <a
        href="https://goeunwiki.notion.site/66e7c8f9cbea4a5d8a9674866f956f5a"
        target="_blank"
        rel="noopener noreferrer"
      >
        ⓒ 2022. goeun jeong. All rights reserved.
      </a>
    </FooterContainer>
  )
}

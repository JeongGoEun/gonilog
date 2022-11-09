import Link from 'next/link'
import styled from '@emotion/styled'

const NAV_LIST = [
  { path: '/', name: 'Posts' },
  { path: '/about', name: 'About' },
]

const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  justify-content: center;
  align-items: center;
`
const Header = () => {
  return (
    <HeaderContainer>
      <div className="flex justify-between">
        <div className="text-3xl text-center">
          <Link href="/">GoniloG</Link>
        </div>
        <nav>
          <ul className="flex flex-wrap items-center m-0 list-none">
            {NAV_LIST.map(d => {
              return (
                <li className="mr-12" key={d.name}>
                  <Link href={d.path}>{d.name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header

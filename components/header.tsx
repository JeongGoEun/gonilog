import Link from 'next/link'
import styled from '@emotion/styled'

const NAV_LIST = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/', name: 'Web' },
  { path: '/', name: 'Framework' },
  { path: '/', name: 'Language' },
  { path: '/', name: 'Network' },
  { path: '/', name: 'Error Note' },
  { path: '/', name: 'Etc' },
]

const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  justify-content: center;
  align-items: center;
`
export default function Header() {
  return (
    <HeaderContainer>
      <div className="flex justify-between">
        <div className="text-3xl text-center">GoniloG</div>
        <nav>
          <ul className="flex items-center m-0 list-none">
            {NAV_LIST.map(d => {
              return (
                <li className="mr-12">
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

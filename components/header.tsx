import { CSSProperties } from 'react'
import Link from 'next/link'

import styles from '../styles/Layout.module.css'

const navUlStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  listStyle: 'none',
}

const titleStyles: CSSProperties = {
  textAlign: 'center',
  fontSize: '30px',
  marginBottom: '3rem',
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div style={titleStyles}>Goeun's 지식 창고</div>
      <nav>
        <ul style={navUlStyles}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Web</Link>
          </li>
          <li>
            <Link href="/about">Framework</Link>
          </li>
          <li>
            <Link href="/about">Language</Link>
          </li>
          <li>
            <Link href="/about">Network</Link>
          </li>
          <li>
            <Link href="/about">Error Note</Link>
          </li>
          <li>
            <Link href="/about">Etc</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

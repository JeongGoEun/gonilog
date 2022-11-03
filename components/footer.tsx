import styles from '../styles/Layout.module.css'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://goeunwiki.notion.site/66e7c8f9cbea4a5d8a9674866f956f5a"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by goeun
      </a>
    </footer>
  )
}

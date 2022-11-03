// import useSWR from 'swr'
import Footer from './footer'
import Header from './header'
import styles from '../styles/Layout.module.css'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

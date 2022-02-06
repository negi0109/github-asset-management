import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const hash = useRouter().asPath.split('#')[1] ?? ''

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Asset Management</title>
      </Head>

      <main className={styles.main}>
        {hash}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/negi0109/github-asset-management"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

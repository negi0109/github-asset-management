import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useLocalStorage from '../hooks/useLocalStorage'

export default function Home() {
  const [githubToken, setGithubToken] = useLocalStorage("github-token");
  const hash = useRouter().asPath.split('#')[1] ?? ''

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Asset Management</title>
      </Head>

      <main className={styles.main}>
        <p>{hash}</p>
        <p>token: {githubToken}</p>
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

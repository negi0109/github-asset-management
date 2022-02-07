
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useLocalStorage from '../hooks/useLocalStorage'
import { login } from '../libs/github'

function Home() {
  const [username, setUserName] = useState("");
  const [githubToken, setGithubToken] = useLocalStorage("github-token");
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState([]);
  const hash = useRouter().asPath.split('#')[1] ?? ''

  useEffect(() => {
    return (async() => {
      if(githubToken == null) return;

      const data = await login(githubToken)
      console.log(data)

      setRepos(data.repos)
      setUser(data.user)
    })();
  }, [githubToken])

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Asset Management</title>
      </Head>

      <main className={styles.main}>
        <p>{hash}</p>
        <div className={styles.repos}>
          {
            repos.map(repo => (
              <div key={repo.id} className={styles.repo}>
                <a href={`https://github.com/${repo.full_name}`}>{repo.full_name}</a>
              </div>
            ))
          }
        </div>
        {/* <p>token: {githubToken}</p> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/negi0109/github-asset-management"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by negi0109
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home;

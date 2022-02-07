
import { useEffect, useState } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useLocalStorage from '../hooks/useLocalStorage'
import useHash from '../hooks/useHash'
import { getFiles, login } from '../libs/github'

function Home() {
  const [username, setUserName] = useState("")
  const [githubToken, setGithubToken] = useLocalStorage("github-token")
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState([])
  const [hash, sethash] = useHash()

  useEffect(() => {
    return (async() => {
      if(githubToken == null) return;

      const data = await login(githubToken)

      setRepos(data.repos.data)
      setUser(data.user.data)
    })();
  }, [githubToken])

  useEffect(() => {
    return (async() => {
      if (hash == null) return;
      if (hash == "") return;

      const [user, repo] = hash.split("/")
      var files = await getFiles(user, repo)
      console.log(files)
    })();
  }, [githubToken, hash])

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
                <a href={`#${repo.full_name}`} onClick={() => sethash(repo.full_name)}>{repo.full_name}</a>
                <a href={`https://github.com/${repo.full_name}`}></a>
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

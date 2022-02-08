/* eslint-disable @next/next/no-img-element */

import React, { Fragment, useEffect, useState } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useLocalStorage from '../hooks/useLocalStorage'
import useHash from '../hooks/useHash'
import { getFile, getFiles, login, getBlob } from '../libs/github'
import { ImageList, ImageListItem, ImageListItemBar, Drawer, AppBar, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@mui/icons-material/Menu"

function Home() {
  const [_, forceUpdate] = useState({})
  const [username, setUserName] = useState("")
  const [githubToken, setGithubToken] = useLocalStorage("github-token")
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState([])
  const [hash, sethash] = useHash()
  const [setting, setSetting] = useState({ paths: [""], tags: [] })
  const [files, setFiles] = useState([])
  const [sidebar, toggleSideBar] = useState(false)
  const [blobs, setBlobs] = useState({})

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

      var setting = { paths: [""], tags: [] }

      try {
        var file = await getFile(user, repo, ".asset-management.json")
        var blob = await getBlob(user, repo, file.sha)
        setting = JSON.parse(Buffer.from(blob.data.content, blob.data.encoding).toString())
      } catch(error) {
        console.log("no setting blob")
        console.error(error)
      }

      console.log("load setting", setting)
      setSetting(setting)

      try {
        var response = await getFiles(user, repo, "")
        setFiles(response.data)
        Promise.all(
          response.data.map(async (v) => {
            if (v.type != "file") return
            if (!/.*\.png/.test(v.name)) return

            if (blobs[v.sha] == undefined) {
              blobs[v.sha] = await getBlob(user, repo, v.sha);
              setBlobs(blobs)
              forceUpdate({})
            }
          })
        )
      } catch(error) {
        console.log("no files")
        console.error(error)
        setFiles([])
      }
    })();
  }, [githubToken, hash])

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Asset Management</title>
      </Head>
      <Toolbar>
      <IconButton
        onClick={() => toggleSideBar(true)}
      >
        <MenuIcon />
      </IconButton>
      </Toolbar>

      <main className={styles.main}>
        <Drawer
          anchor="left"
          open={sidebar}
          onClose={() => toggleSideBar(false)}
        >
          {
            repos.map(repo => (
              <div key={repo.id} className={styles.repo}>
                <a href={`#${repo.full_name}`} onClick={() => sethash(repo.full_name)}>{repo.full_name}</a>
                <a href={`https://github.com/${repo.full_name}`}></a>
              </div>
            ))
          }
        </Drawer>
        <p>{hash}</p>
        {hash == "" ? (<div className={styles.repos}>
          {
            repos.map(repo => (
              <div key={repo.id} className={styles.repo}>
                <a href={`#${repo.full_name}`} onClick={() => sethash(repo.full_name)}>{repo.full_name}</a>
                <a href={`https://github.com/${repo.full_name}`}></a>
              </div>
            ))
          }
        </div>) : null}
        <ImageList variant="masonry" cols={6} gap={4}>
        {
          files.filter(v => /.*\.png/.test(v.name)).map(v => (
            <ImageListItem key={v.name}>
              <img
                width="100%"
                src={`data:image/png;base64,${blobs[v.sha]?.data?.content}`}
                alt={v.name}
              />
              <ImageListItemBar
                title={v.name}
              />
            </ImageListItem>
          ))
        }
        </ImageList>
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

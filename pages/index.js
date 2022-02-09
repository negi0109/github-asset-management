/* eslint-disable @next/next/no-img-element */
import path from "path"
import React, { Fragment, useEffect, useState } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useLocalStorage from '../hooks/useLocalStorage'
import useHash from '../hooks/useHash'
import { getFile, getFiles, login, getBlob } from '../libs/github'
import { ImageList, ImageListItem, ImageListItemBar, Drawer, AppBar, Toolbar, IconButton } from "@material-ui/core"
import PreviewDialog from "../components/PreviewDialog"
import MenuIcon from "@mui/icons-material/Menu"

function Home() {
  const [_, forceUpdate] = useState({})
  const [username, setUserName] = useState("")
  const [githubToken, setGithubToken] = useLocalStorage("github-token")
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState([])
  const [hash, setHash] = useHash()
  const [setting, setSetting] = useState({ paths: [""], tags: [], prevs: ["png"], origin: "png" })
  const [files, setFiles] = useState([])
  const [fileHash, setFileHash] = useState({})
  const [sidebar, toggleSideBar] = useState(false)
  const [blobs, setBlobs] = useState({})
  const [previewFile, setPreviewFile] = useState({})
  const [displayPreview, togglePreview] = useState(false)

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

      var setting = { paths: [""], tags: [], prevs: ["png"], origin: "png" }

      try {
        var file = await getFile(user, repo, ".asset-management.json")
        var blob = await getBlob(user, repo, file.sha)
        setting = Object.assign(
          setting,
          JSON.parse(Buffer.from(blob.data.content, blob.data.encoding).toString())
        )
      } catch(error) {
        console.log("no setting blob")
        console.error(error)
      }

      console.log("load setting", setting)
      setSetting(setting)

      try {
        var fileHash = {}
        var response = await getFiles(user, repo, "")

        setFiles(response.data)

        response.data.forEach(v => {
          const ext = path.extname(v.name)
          const ex = ext.substring(1)
          const name = path.basename(v.name, ext)

          if (![setting.origin, ...setting.prevs].includes(ex)) return

          fileHash[name] ??= { name: name }
          fileHash[name][ex] = v
        })
        setFileHash(fileHash)

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
        <p>{ hash }</p>
      </Toolbar>

      <main className={styles.main}>
        <PreviewDialog
          opened={displayPreview}
          file={previewFile}
          onClose={() => togglePreview(false)}
          blobs={blobs}
          setting={setting}
        />

        <Drawer
          anchor="left"
          open={sidebar}
          onClose={() => toggleSideBar(false)}
        >
          {
            repos.map(repo => (
              <div key={repo.id} className={styles.repo}>
                <a
                  href={`#${repo.full_name}`}
                  onClick={() => { setHash(repo.full_name); toggleSideBar(false) } }
                >
                  {repo.full_name}
                </a>
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
                <a href={`#${repo.full_name}`} onClick={() => setHash(repo.full_name)}>{repo.full_name}</a>
                <a href={`https://github.com/${repo.full_name}`}></a>
              </div>
            ))
          }
        </div>) : null}

        <ImageList variant="masonry" cols={6} gap={4}>
        {
          Object.entries(fileHash).map(v => (
            <ImageListItem
              key={v[0]}
              onClick={() => {
                togglePreview(true)
                setPreviewFile(v[1])
                forceUpdate()
              }}
            >
              <img
                src={`data:image/png;base64,${blobs[v[1][setting.prevs[0]].sha]?.data?.content}`}
                alt={v[0]}
              />
              <ImageListItemBar
                title={v[0]}
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

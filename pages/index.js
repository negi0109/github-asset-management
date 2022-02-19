/* eslint-disable @next/next/no-img-element */
import path from "path"
import React, { Fragment, useEffect, useState } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useLocalStorage from '../hooks/useLocalStorage'
import useHash from '../hooks/useHash'
import { getFile, getFiles, login, getBlob, getBlobCache, getUser } from '../libs/github'
import { ImageList, ImageListItem, ImageListItemBar, Drawer, AppBar, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@mui/icons-material/Menu"
import LockIcon from "@mui/icons-material/Lock"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PreviewDialog from "../components/PreviewDialog"
import GithubTokenDialog from "../components/GithubTokenDialog"
import SettingForm from "../components/SettingForm"
import SideBar from "../components/SideBar"
import { DEFAULT_SETTING, importSetting } from "../libs/Setting"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Home() {
  const [_, forceUpdate] = useState({})
  const [username, setUserName] = useState("")
  const [githubToken, setGithubToken] = useLocalStorage("github-token")
  const [repos, setRepos] = useState([])
  const [hash, setHash] = useHash()
  const [setting, setSetting] = useState(DEFAULT_SETTING())
  const [fileHash, setFileHash] = useState({})
  const [sidebar, toggleSideBar] = useState(false)
  const [blobs, setBlobs] = useState({})
  const [previewFile, setPreviewFile] = useState({})
  const [displayPreview, togglePreview] = useState(false)
  const [tokenDialog, toggleTokenDialog] = useState(false)
  const [favorites, setFavorites] = useLocalStorage("favorites", [])

  const [user, repo] = hash?.split("/") ?? []

  useEffect(() => {
    return (async() => {
      if(githubToken == null) return;

      login(githubToken)
      const data = await getUser()

      setRepos(data.repos.data)
    })();
  }, [githubToken])

  useEffect(() => {
    return (async() => {
      if (hash == null) return;
      if (hash == "") return;

      var setting

      try {
        var file = await getFile(user, repo, ".asset-management.json")
        var blob = await getBlob(user, repo, file.sha)
        setting = importSetting(
          JSON.parse(Buffer.from(blob.data.content, blob.data.encoding).toString())
        )
      } catch(error) {
        setting = DEFAULT_SETTING()
        console.log("no setting blob")
        console.error(error)
      }

      console.log("load setting", setting)
      setSetting(setting)

      try {
        var fileHash = {}
        var response = await getFiles(user, repo, "")

        response.data.forEach(v => {
          if (v.type != "file") return

          const ext = path.extname(v.name)
          const ex = ext.substring(1)
          const name = path.basename(v.name, ext)

          fileHash[name] ??= { name: name, exts: [] }
          fileHash[name][ex] = v
          fileHash[name].exts = fileHash[name].exts.concat(ex)
        })

        Object.values(fileHash).forEach(v => {
          setting.prevs.some(ext => {
            if (v[ext] != null) {
              v.prev = ext
              true
            }
          })
        })

        setFileHash(fileHash)

      } catch(error) {
        console.log("no files")
        console.error(error)
      }
    })();
  }, [githubToken, hash])

  useEffect(() => {
    Object.values(fileHash).forEach(v => {
      v.prev = undefined

      setting.prevs.some(ext => {
        if (v[ext] != null) {
          v.prev = ext
          true
        }
      })
    })
    setFileHash(fileHash)
    forceUpdate({})
  }, [setting.prevs])

  return (
    <div className={`${styles.container} ${setting.pixelated ? "pixelated" : ""}`}>
      <Toolbar>
        <IconButton
          onClick={() => toggleSideBar(true)}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={() => toggleTokenDialog(true)}
        >
          <LockIcon />
        </IconButton>
        <p>{ hash }</p>
        {
          favorites?.includes(hash) ?
          (
            <IconButton
              onClick={() => setFavorites(favorites.filter(v => v != hash))}
            >
              <StarIcon />
            </IconButton>
          )
          : (
            <IconButton
              onClick={() => setFavorites(favorites.concat(hash))}
            >
              <StarBorderIcon />
            </IconButton>
          )
        }
      </Toolbar>

      <main className={styles.main}>
        <PreviewDialog
          opened={displayPreview}
          file={previewFile}
          onClose={() => togglePreview(false)}
          forceUpdate={() => forceUpdate({})}
          blobs={blobs}
          setting={setting}
        />

        <GithubTokenDialog
          opened={tokenDialog}
          file={previewFile}
          onClose={() => toggleTokenDialog(false)}
          setGithubToken={setGithubToken}
        />

        <SideBar
          anchor="left"
          open={sidebar}
          repos={repos}
          toggleSideBar={toggleSideBar}
          setHash={setHash}
          favorites={favorites}
          setFavorites={setFavorites}
        />

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

        <SettingForm
          setting={setting}
          setSetting={setSetting}
          hash={hash}
          githubToken={githubToken}
        />
        <ImageList variant="masonry" cols={setting.column} gap={4}>
        {
          Object.values(fileHash).filter(
            v => v.prev
          ).map(v => (
            <ImageListItem
              key={v.name}
              onClick={() => {
                togglePreview(true)
                setPreviewFile(v)
                forceUpdate()
              }}
            >
              { setting.tagRelations[v.name]?.length > 0 ?
                (<div className={styles.icons}>
                  { setting.tagRelations[v.name].map(v => (
                    <FontAwesomeIcon key={v} icon={setting.tags[v].icon}/>
                  )) }
                </div>) : null
              }
              <img
                src={`data:image/${v.prev};base64,${
                  v[v.prev]?.sha ?
                    getBlobCache(user, repo, v[v.prev].sha, blobs, () => forceUpdate({}))?.data?.content
                    : null
                }`}
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

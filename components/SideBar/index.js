
import React from "react"
import { Drawer } from "@material-ui/core"

export default function IconPicker({ open, repos, setHash, toggleSideBar }) {

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggleSideBar(false)}
    >
      {
        repos?.map(repo => (
            <div key={repo.id}>
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
  )
}

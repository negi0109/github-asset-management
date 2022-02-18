
import React, { useState } from "react"
import styles from "./SideBar.module.css"
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core"
import { ListItemButton, ListItemIcon, Collapse } from "@mui/material"
import HashDialog from "./HashDialog"
import AddIcon from '@mui/icons-material/Add'
import OtherHousesIcon from '@mui/icons-material/OtherHouses'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarIcon from '@mui/icons-material/Star'

export default function SideBar({ open, repos, setHash, toggleSideBar, favorites, setFavorites }) {
  const [other, toggleOther] = useState(false)
  const [hashDialog, toggleHashDialog] = useState(false)

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggleSideBar(false)}
    >
      {
        favorites?.length > 0 ? (
          <List>
            {
              favorites?.map(repo => (
                <ListItem key={repo.id} className={styles.repo}>
                  <a
                    href={`#${repo}`}
                    onClick={() => { setHash(repo); toggleSideBar(false) } }
                  >
                    {repo}
                  </a>
                </ListItem>
              ))
            }
          </List>
        ) : null
      }
      <ListItemButton
        onClick={() => toggleHashDialog(true)}
        className={styles.flexNone}
      >
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Repository" />
      </ListItemButton>
      <ListItemButton
        onClick={() => toggleOther(!other)}
        className={styles.flexNone}
      >
        <ListItemIcon>
          <OtherHousesIcon />
        </ListItemIcon>
        <ListItemText primary="My Repository" />
        {other ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {
        other && (
          <List>
            {
              repos?.map(repo => (
                <ListItem key={repo.full_name} className={styles.repo}>
                  <a
                    href={`#${repo.full_name}`}
                    onClick={() => { setHash(repo.full_name); toggleSideBar(false) } }
                  >
                    {repo.full_name}
                  </a>
                </ListItem>
              ))
            }
          </List>
        )
      }
      <HashDialog
        opened={hashDialog}
        onClose={() => toggleHashDialog(false)}
        setHash={v => setHash(v)}
      />
    </Drawer>
  )
}

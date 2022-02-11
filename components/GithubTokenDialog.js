import React, { Fragment, useEffect, useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@material-ui/core"
import _ from "lodash"

export default function GithubTokenDialog({ opened, onClose, setGithubToken }) {
  const [text, setText] = useState("")

  useEffect(() => {
    setText("")
  }, [opened])

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Github Personal Access Token</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ブラウザの<a href="">LocalStorage</a>上に保存されます
        </DialogContentText>
        <TextField
          value={text}
          autoFocus
          margin="dense"
          label="Personal Access Token"
          fullWidth
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => {
            setGithubToken(text)
            onClose()
          }}>Ok</Button>
        </DialogActions>
    </Dialog>
  )
}

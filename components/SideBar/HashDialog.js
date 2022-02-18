import React, { useEffect, useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@material-ui/core"
import _ from "lodash"

export default function HashDialog({ opened, onClose, setHash }) {
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
      <DialogTitle>Add Repository</DialogTitle>
      <DialogContent>
        <DialogContentText>
          UserName/RepositoryName の形式で入力してください
        </DialogContentText>
        <TextField
          value={text}
          autoFocus
          margin="dense"
          label="repository"
          fullWidth
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => {
            setHash(text)
            onClose()
          }}>Ok</Button>
        </DialogActions>
    </Dialog>
  )
}

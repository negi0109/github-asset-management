import React, { useState, Fragment, useEffect } from "react"
import { exportSetting } from "../libs/Setting"
import { saveSetting, login, getRepository, getRef } from '../libs/github'
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
  Button, TextField, Select, FormGroup, FormControl, FormLabel, FormControlLabel,
  Slider, Container, Checkbox, Grid, MenuItem,
} from "@material-ui/core"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import { Stack } from "@mui/material"

export default function SettingForm({ setting, setSetting, hash, githubToken }) {
  const [previewSetting, togglePreviewSetting] = useState(false)
  const [repository, setRepository] = useState({})
  const [currentCommitId, setCurrentCommitId] = useState("")
  const [saveDialog, toggleSaveDialog] = useState(false)
  const [commitMessage, setCommitMessage] = useState("Update .asset-management.json")
  const [dialogMessage, setDialogMessage] = useState("")

  const [user, repo] = hash?.split("/") ?? []

  useEffect(() => {
    (async() => {
      if (hash == null) return;
      if (hash == "") return;

      login(githubToken)

      const repository = await getRepository(user, repo);
      const ref = await getRef(user, repo, `heads/${repository.default_branch}`)
      const commitId = ref.object.sha

      setRepository(repository)
      setCurrentCommitId(commitId)
    })()
  }, [hash, githubToken])

  useEffect(() => {
    setDialogMessage("")
  }, [saveDialog])

  return (
    <Container>
      <FormGroup>
        <FormControl variant="standard">
          <Stack direction="row">
            {
              setting?.prevs != undefined ?
              setting.prevs.map((k, i) =>
                <Fragment key={i}>
                  <TextField
                    value={k}
                    autoFocus
                    margin="dense"
                    label="prev ext"
                    fullWidth
                    onChange={event => {
                      const v = event.target.value

                      setSetting({
                        ...setting,
                        prevs:
                          setting.prevs.map((prev, j) => j == i ? v : prev),
                      })
                    }}
                  />
                  {
                    (setting?.prevs?.length > 1) && <CloseIcon
                      onClick={() => {
                        setSetting({
                          ...setting,
                          prevs: setting.prevs.filter((_, j) => i != j),
                        })
                      }}
                    />
                  }
                </Fragment>
              ) : null
            }
            <AddIcon
              onClick={() => {
                setSetting({ ...setting, prevs: setting.prevs.concat("") })
              }}
            />
          </Stack>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl variant="standard">
          <FormLabel id="preview-columns">preview columns</FormLabel>
          <Slider
            id="preview-columns"
            value={setting.column}
            step={1}
            min={1}
            max={10}
            marks
            onChange={(_, v) => {
              setSetting({ ...setting, column: v })
            }}
          />
        </FormControl>
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                value={setting.pixelated}
                onChange={(_, v) => {
                  setSetting({ ...setting, pixelated: v })
                }}
              />
            }
            label="pixelated"/>
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                value={previewSetting}
                onChange={(_, v) => {
                  togglePreviewSetting(v)
                }}
              />
            }
            label="export"/>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            onClick={
              () => {
                toggleSaveDialog(true)
              }
            }
          >
            Save
          </Button>
        </Grid>
      </Grid>
      {
        previewSetting ? (
          <>
            <Select
                value={setting.stringifyFormat}
                label="stringify-format"
                onChange={ (event) => {
                  setSetting({ ...setting, stringifyFormat: event.target.value })
                } }
              >
                <MenuItem value={0}>compressed</MenuItem>
                <MenuItem value="  ">space 2</MenuItem>
                <MenuItem value={"\t"}>tab</MenuItem>
              </Select>
            <pre>
              {JSON.stringify(exportSetting(setting), null, setting.stringifyFormat)}
            </pre>
          </>
        ) : null
      }
      <Dialog
        open={saveDialog}
        onClose={() => toggleSaveDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Commit</DialogTitle>
        <DialogContent>
          {
            (dialogMessage != "") &&
            <DialogContentText>
            {
              dialogMessage
            }
            </DialogContentText>
          }
          <TextField
            value={commitMessage}
            autoFocus
            margin="dense"
            label="commitMessage"
            fullWidth
            onChange={(event) => {
              setCommitMessage(event.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toggleSaveDialog(false)}>Cancel</Button>
          <Button
            disabled={dialogMessage == "Succeed"}
            onClick={() => {
              saveSetting(
                user, repo, repository.default_branch, exportSetting(setting), currentCommitId, commitMessage,
                commitId => {
                  setCurrentCommitId(commitId)
                  setDialogMessage("Succeed")
                },
                message => { setDialogMessage(message) }
              )
            }}
          >Commit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

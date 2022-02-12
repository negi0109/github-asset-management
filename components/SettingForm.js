import React, { useState } from "react"
import { exportSetting } from "../libs/Setting"
import { TextField, Select, FormGroup, FormControl, FormLabel, FormControlLabel, Slider, Container, Checkbox, Grid, MenuItem } from "@material-ui/core"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import { Stack } from "@mui/material"

export default function SettingForm({ setting, setSetting }) {
  const [previewSetting, togglePreviewSetting] = useState(false)

  return (
    <Container>
      <FormGroup>
        <FormControl variant="standard">
          <TextField
            value={setting.origin}
            autoFocus
            margin="dense"
            label="origin ext"
            fullWidth
            onChange={event => {
              setSetting({ ...setting, origin: event.target.value })
            }}
          />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl variant="standard">
          <Stack direction="row">
            {
              setting?.prevs != undefined ?
              setting.prevs.map((k, i) =>
                <>
                  <TextField
                    key={i}
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
                  <CloseIcon
                    onClick={() => {
                      setSetting({
                        ...setting,
                        prevs: setting.prevs.filter((_, j) => i != j),
                      })
                    }}
                  />
                </>
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
    </Container>
  )
}

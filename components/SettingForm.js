import React, { useState } from "react"
import { exportSetting } from "../libs/Setting"
import { FormGroup, FormControl, FormLabel, FormControlLabel, Slider, Container, Checkbox, Grid } from "@material-ui/core"

export default function SettingForm({ setting, setSetting }) {
  const [previewSetting, togglePreviewSetting] = useState(false)

  return (
    <Container>
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
            label="export setting"/>
        </Grid>
      </Grid>
      {
        previewSetting ? (
          <pre>
            {JSON.stringify(exportSetting(setting), null, "\t")}
          </pre>
        ) : null
      }
    </Container>
  )
}

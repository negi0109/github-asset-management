import { FormGroup, FormControl, FormLabel, FormControlLabel, Slider, Container, Checkbox, Item } from "@material-ui/core"

export default function SettingForm({ setting, setSetting }) {
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
      <FormGroup>
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
      </FormGroup>
    </Container>
  )
}

import { FormGroup, FormControl, Slider } from "@material-ui/core"

export default function SettingForm({ setting, setSetting }) {
  return (
    <FormGroup>
        <FormControl variant="standard">
            <Slider
                value={setting.column}
                step={1}
                min={1}
                max={10}
                marks
                onChange={(e, v) => {
                    setSetting({ ...setting, column: v })
                }}
            />
        </FormControl>
    </FormGroup>
  )
}

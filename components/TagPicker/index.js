import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Dialog, DialogTitle, DialogContent } from "@material-ui/core"
import { ICONS } from "../../libs/icon"

export default function TagPicker({ value, onChange }) {
  const [opened, toggleOpened ] = useState(false)

  return (
    <>
      {
        <FontAwesomeIcon
          onClick={_ => { toggleOpened(true) }}
          icon={value}
        />
      }
      <Dialog
        open={opened}
        onClose={() => { toggleOpened(false) }}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">Icon Picker</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          {
            ICONS.map(icon => (
                <FontAwesomeIcon
                  key={icon}
                  icon={icon}
                  onClick={_ => {
                    toggleOpened(false)
                    onChange(icon)
                  }}
                />
            ))
          }
        </DialogContent>
      </Dialog>
    </>
  )
}

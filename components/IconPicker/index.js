import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Dialog, DialogTitle, DialogContent } from "@material-ui/core"
import { ICONS } from "../../libs/icon"

export default function IconPicker({ value, onChange }) {
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
                key={`${icon[0]}/${icon[1]}`}
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

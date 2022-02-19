import React, { Fragment } from "react"
import {
  Select, FormGroup, FormControl, FormLabel,
  Container, Checkbox, MenuItem,
} from "@material-ui/core"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack } from "@mui/material"

export const DEFAULT_SETTING = { excludeTags: [], includeTags: [] }

export default function FilterForm({ setting, filter, setFilter }) {

  return (
    <Container>
      <FormGroup>
        <FormControl variant="standard">
          <FormLabel id="exclude-tags">exclude tags</FormLabel>
          <Stack direction="row">
            {
              filter.excludeTags.map((tag) =>
                <Fragment key={tag}>
                  <FormControl>
                    <Select
                      labelId="new-exclude-tag"
                      value={tag}
                      label="tag"
                      onChange={ (event) => {
                        const value = event.target.value

                        if (setting.tags[value] === undefined) return
                        setFilter({
                          ...filter,
                          excludeTags:
                            filter.excludeTags.map(v => tag != v ? v : value),
                        })
                      } }
                    >
                      {
                        setting.tags &&
                          Object.keys(setting.tags).filter(
                            v => !filter.excludeTags.includes(v) || v == tag
                          ).map(id => (
                            <MenuItem value={id} key={id}>
                              <FontAwesomeIcon icon={setting.tags[id].icon} />

                              {setting.tags[id].name}
                            </MenuItem>
                          ))
                      }
                    </Select>
                  </FormControl>
                  <CloseIcon
                    onClick={() => {
                      setFilter({
                        ...filter,
                        excludeTags: filter.excludeTags.filter(v => tag != v),
                      })
                    }}
                  />
                </Fragment>
              )
            }
            <AddIcon
              onClick={() => {
                setFilter({
                  ...filter,
                  excludeTags: filter.excludeTags.concat(""),
                })
              }}
            />
          </Stack>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl variant="standard">
          <FormLabel id="include-tags">include tags</FormLabel>
          <Stack direction="row">
            {
              filter.includeTags.map((tag) =>
                <Fragment key={tag}>
                  <FormControl>
                    <Select
                      labelId="new-include-tag"
                      value={tag}
                      label="tag"
                      onChange={ (event) => {
                        const value = event.target.value

                        if (setting.tags[value] === undefined) return
                        setFilter({
                          ...filter,
                          includeTags:
                            filter.includeTags.map(v => tag != v ? v : value),
                        })
                      } }
                    >
                      {
                        setting.tags &&
                          Object.keys(setting.tags).filter(
                            v => !filter.includeTags.includes(v) || v == tag
                          ).map(id => (
                            <MenuItem value={id} key={id}>
                              <FontAwesomeIcon icon={setting.tags[id].icon} />

                              {setting.tags[id].name}
                            </MenuItem>
                          ))
                      }
                    </Select>
                  </FormControl>
                  <CloseIcon
                    onClick={() => {
                      setFilter({
                        ...filter,
                        includeTags: filter.includeTags.filter(v => tag != v),
                      })
                    }}
                  />
                </Fragment>
              )
            }
            <AddIcon
              onClick={() => {
                setFilter({
                  ...filter,
                  includeTags: filter.includeTags.concat(""),
                })
              }}
            />
          </Stack>
        </FormControl>
      </FormGroup>
    </Container>
  )
}

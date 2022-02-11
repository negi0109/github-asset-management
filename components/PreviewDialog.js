import AddIcon from "@mui/icons-material/Add"
import { FormControl, Grid, Dialog, Container, TextField, Button, InputLabel, Select, MenuItem } from "@material-ui/core"

export default function PreviewDialog({ opened, file, onClose, blobs, setting, forceUpdate }) {
  return (
    <Dialog
      open={opened}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <Grid container>
        <img
          width="66.66666%"
          src={`data:image/${file.prev};base64,${blobs[file[file.prev]?.sha]?.data?.content}`}
          alt={file.name}
          className="pixelated"
        />
        <Grid container item flexDirection="column" xs={4}>
          <Container>
            name: {file.name}
            <Grid container>
              <Button
                onClick={() => {
                  console.log("add tag")
                  // 任意の適当なID生成
                  var id;
                  do {
                    id = Math.random().toString(35).slice(-8)
                  } while (setting.tags[id] !== undefined)
                  var tag = {}
                  setting.tags[id] = tag
                  if (setting.tagRelations[file.name] === undefined)
                    setting.tagRelations[file.name] = []

                  console.log(setting)
                  setting.tagRelations[file.name] = setting.tagRelations[file.name].concat(id)
                  tag.name = "new tag"

                  forceUpdate({})
                }}
              >
                <AddIcon />
                Add Tag
              </Button>
              <Grid container item>
                {
                  setting.tagRelations[file.name] !== undefined ?
                  (
                    setting.tagRelations[file.name].map(id => (
                      <Grid key={id} item xs={12}>
                        <TextField
                          type="text"
                          value={setting.tags[id].name}
                          onChange={event => {
                            setting.tags[id].name = event.target.value
                            forceUpdate({})
                          }}
                        />
                      </Grid>
                    ))
                  ) : null
                }
              </Grid>
            </Grid>
            <FormControl fullWidth>
              <InputLabel id="new-tag">tag</InputLabel>
              <Select
                labelId="new-tag"
                value=""
                label="tag"
                onChange={ (event) => {
                  const value = event.target.value
                  if (setting.tags[value] === undefined) return
                  if (setting?.tagRelations?.[file.name]?.includes(value)) return


                  if (setting.tagRelations[file.name] === undefined)
                    setting.tagRelations[file.name] = []

                  setting.tagRelations[file.name] = setting.tagRelations[file.name].concat(value)

                  forceUpdate({})
                } }
              >
                {
                  setting.tags !== undefined ?
                  (
                    Object.keys(setting.tags).filter(v => !setting?.tagRelations?.[file.name]?.includes(v)).map(id => (
                      <MenuItem value={id} key={id}>{setting.tags[id].name}</MenuItem>
                    ))
                  ) : null
                }
              </Select>
            </FormControl>
          </Container>
        </Grid>
      </Grid>
    </Dialog>
  )
}

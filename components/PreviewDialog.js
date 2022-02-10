import AddIcon from "@mui/icons-material/Add"
import { Grid, Dialog, Container, TextField, Button } from "@material-ui/core"

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
          </Container>
        </Grid>
      </Grid>
    </Dialog>
  )
}

import { Grid, Dialog, CardContent, Typography, Container, CardActions } from "@material-ui/core"

export default function PreviewDialog({ opened, file, onClose, blobs, setting }) {
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
          <CardContent>
            {file.name}
          </CardContent>
        </Grid>
      </Grid>
    </Dialog>
  )
}

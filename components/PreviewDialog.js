import { Grid, Dialog, DialogContent } from "@material-ui/core"

export default function PreviewDialog({ opened, file, onClose, blobs, setting }) {
  return (
    <Dialog
      open={opened}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <Grid
          container
          flexDirection="column"
        >
          <img
            width="100%"
            height="100%"
            src={`data:image/png;base64,${blobs[file[setting.prevs[0]]?.sha]?.data?.content}`}
            alt={file.name}
          />
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

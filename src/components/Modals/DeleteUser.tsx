import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fade, Grid } from '@mui/material';
import { useDeleteTaskMutation } from '../../app/services/GetUserRecords';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface ModalTypes {
  open: boolean;
  onClose: () => void,
  id:number | undefined
}
export default function BasicModal(props: ModalTypes) {
  const { open, onClose ,id} = props;
  const [deleteTask] = useDeleteTaskMutation();
  const handleDeleteTask = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    deleteTask(id);
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h3" style={{marginBottom:"5px"}}>
              Are you sure you want to Delete this user?
            </Typography>
            <Grid container rowSpacing={1} >
              <Grid item xs={2.5}>
                <Button variant="outlined" onClick={handleDeleteTask}>
                  Yes
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={onClose} variant="outlined">
                  No
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

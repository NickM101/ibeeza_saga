import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../saga/userReducer';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomDialog({ open, close, single }) {
  const dispatch = useDispatch();

  const delete_user = () => (dispatch(deleteUser(single._id)), close())

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to delete this user"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            No
          </Button>
          <Button onClick={delete_user} variant='contained' color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

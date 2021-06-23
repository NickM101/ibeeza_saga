import "../App.css";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { createUser, updateUser } from "../saga/userReducer";


export default function FormDialog({ open, close, object }) {
  const dispatch = useDispatch();
  const create_user = (x) => (dispatch(createUser(x)))
  const edit_user = (x) => (dispatch(updateUser(x)))

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    object ? edit_user({...data, id: object._id }) : create_user(data)
    return close()
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{object ? 'Edit User':'Add New User'}</DialogTitle>
        <DialogContent >
          <DialogContentText>All fields are mandatory</DialogContentText>

          <TextField
            label="First Name"
            defaultValue={object ? object.first : ''} 
            {...register("first")}
          />

          <TextField
            label="Last Name"
            defaultValue={object ? object.last : ''} 
            {...register("last")}
          />

          <TextField
            label="Email"
            defaultValue={object ? object.email : ''} 
            {...register("email")}
          />

          <TextField
            label="Phone"
            defaultValue={object ? object.phone : ''} 
            {...register("phone")}
          />

          <TextField
            label="Location"
            defaultValue={object ? object.location : ''} 
            {...register("location")}
          />

          <TextField
            label="Hobby"
            defaultValue={object ? object.hobby : ''} 
            {...register("hobby")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

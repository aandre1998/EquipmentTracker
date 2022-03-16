//Module imports
import React, {useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LINsService from '../services/LINs';

//MUI imports
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//Components imports


const AddNewLIN = ({ LINs, setLINs }) => {
  const [open, setOpen] = React.useState(false);
  const [LINField, setLINField] = React.useState('');
  const [descField, setDescField] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Submitted LINField is ${LINField}`);
    console.log(`Submitted descField is ${descField}`);

    const newLINObject = {
      id: LINField,
      LIN: LINField,
      LIN_Description: descField,
      NSN_List: []
    }

    LINsService.create(newLINObject)
      .then(returnedNote => {
        setLINs(LINs.concat(returnedNote));
        setLINField('');
        setDescField('');
        handleClose();
      })
  }

  const handleLINFieldChange = (event) => {
    setLINField(event.target.value);
  }

  const handleDescFieldChange = (event) => {
    setDescField(event.target.value);
  }

  return (
    <div>
      <Link to=''><Card sx={{margin: 'auto', width: '70px', fontSize:'40px', textAlign: 'center', textDecoration: 'none', ':hover': {boxShadow: 10}}} 
        variant="outlined" onClick={handleClickOpen}>
        +
      </Card></Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New LIN</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="AddLIN"
            label="LIN"
            fullWidth
            variant="standard"
            onChange={handleLINFieldChange}
          />
          <TextField
            margin="dense"
            id="AddLINDescription"
            label="Description"
            fullWidth
            variant="standard"
            onChange={handleDescFieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNewLIN;
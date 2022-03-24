import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

function NewPaletteDialogue(props) {
    let navigate = useNavigate();
    const { colors, palettes, hideForm } = props;
    const [open, setOpen] = React.useState(true);
    const [newPaletteName, setNewPaletteName] = useState('');
  
    const handleClose = () => {
      setOpen(false);
    };

    function handlePaletteChange(e){
        setNewPaletteName(e.target.value)
    }

    function handleSubmit(){
        const newPalette = {
          paletteName: newPaletteName,
          id: newPaletteName.toLowerCase().replace(/ /g, '-'),
          colors: colors
        }
        props.savePalette(newPalette)
        navigate('/');
    }

    useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
          return palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
          );
        });
      });
  
    return (
        <Dialog open={open} aria-labelledby="form-dialog-title" onClose={hideForm}>
          <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Enter a name for the new palette. Each palette must have a unique name.
            </DialogContentText>

            <Picker/>

                <TextValidator 
                    label='Palette Name' 
                    value={newPaletteName} 
                    onChange={handlePaletteChange}
                    fullWidth
                    margin='normal'
                    validators={['required', 'isPaletteNameUnique']}
                    errorMessages={['Enter a palette name.','Name already in use.']}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={hideForm} color="primary">
                Cancel
                </Button>
                <Button 
                    variant='contained' 
                    color='primary' 
                    type='submit'
                    >Save Palette
                </Button>
            </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

export default NewPaletteDialogue;
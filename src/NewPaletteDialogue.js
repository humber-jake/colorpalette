import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function NewPaletteDialogue(props) {
    let navigate = useNavigate();
    const { colors, palettes } = props;
    const [open, setOpen] = React.useState(false);
    const [newPaletteName, setNewPaletteName] = useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
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
        console.log(newPalette);
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
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator 
                    label='Palette Name' 
                    value={newPaletteName} 
                    onChange={handlePaletteChange}
                    validators={['required', 'isPaletteNameUnique']}
                    errorMessages={['Enter a palette name.','Name already in use.']}
                />
                <Button 
                    variant='contained' 
                    color='primary' 
                    type='submit'
                >Save Palette
                </Button>
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default NewPaletteDialogue;
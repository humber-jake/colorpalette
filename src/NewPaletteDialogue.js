import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart'
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './styles/NewPaletteDialogueStyles'
import 'emoji-mart/css/emoji-mart.css'

function NewPaletteDialogue(props) {

    const { colors, palettes, hideForm, savePalette, classes } = props;

    const navigate = useNavigate();
    const [emoji, setEmoji] = useState('🙂');
    const [stage, setStage] = useState('form');
    const [newPaletteName, setNewPaletteName] = useState('');

    // Validate unique palette name
    useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
          return palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
          );
        });
      });

    function showEmojiPicker(){
        setStage('emoji')
    }
    function handlePaletteChange(e){
        setNewPaletteName(e.target.value)
    }
    function pickEmoji(e){
        setEmoji(e.native)
    }

    function handleSubmit(){
        const newPalette = {
          paletteName: newPaletteName,
          id: newPaletteName.toLowerCase().replace(/ /g, '-'),
          emoji: emoji,
          colors: colors
        }
        savePalette(newPalette)
        navigate('/');
    }
  
    return (
        <div>
            {/* Emoji Dialog Box */}
            <Dialog open={stage === 'emoji'} onClose={hideForm}>
                <DialogTitle id="form-dialog-title">Choose an Emoji</DialogTitle>
                <Picker onSelect={pickEmoji}/>
                <div className={classes.emojiButton}>
                    <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={handleSubmit}
                        >Save Palette
                    </Button>
                    <span className={classes.emoji}>{emoji}</span>
                </div>
            </Dialog>

            {/* Text input Dialog Box */}
            <Dialog open={stage === 'form'} aria-labelledby="form-dialog-title" onClose={hideForm}>
                <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
                <ValidatorForm onSubmit={showEmojiPicker}>
                    <DialogContent>
                        <DialogContentText>
                        Enter a name for the new palette. Each palette must have a unique name.
                        </DialogContentText>
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
        </div>
    );
}

export default withStyles(styles)(NewPaletteDialogue);
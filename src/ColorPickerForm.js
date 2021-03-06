import React, { useState, useEffect } from 'react';
import {ChromePicker} from 'react-color'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {withStyles} from '@material-ui/core/styles/';
import Button from '@material-ui/core/Button'
import styles from './styles/ColorPickerFormStyles'

function ColorPickerForm(props) {

    const { colors, setColors, isPaletteFull, classes } = props;
    const [currentColor, setCurrentColor] = useState('');
    const [newColorName, setNewColorName] = useState('');

    // validate unique color names
    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
          return colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          );
        });
      });

    // validate unique color values
    useEffect(() => {
        ValidatorForm.addValidationRule("isColorUnique", value => {
          return colors.every(
            ({ color }) => color !== currentColor
          );
        });
      });

    function addNewColor(){
        const newColor = {
            color: currentColor,
            name: newColorName
        }
        setColors([...colors, newColor])
        setNewColorName('');
    }

    function handleColorChange(e){
        setNewColorName(e.target.value)
    }

    return (
        <div className={classes.container}>
            <ChromePicker 
                color={currentColor} 
                onChange={e => setCurrentColor(e.hex)}
                className={classes.picker}
            />
            <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
                <TextValidator
                    variant='filled'
                    placeholder='Color Name'
                    className={classes.colorNameInput}
                    value={newColorName}
                    onChange={handleColorChange}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['This field is required.', 'Color name must be unique.', 'This color is already in the palette.']}
                />
                <Button 
                    className={classes.addColor}
                    variant='contained' 
                    color='primary' 
                    type='submit'
                    style={{backgroundColor: isPaletteFull ? "grey" : currentColor}}
                    disabled={isPaletteFull}
                >{isPaletteFull ? "Palette Full" : 'Add Color'}
                </Button>
            </ValidatorForm>
        </div>
    );
}

export default withStyles(styles)(ColorPickerForm);
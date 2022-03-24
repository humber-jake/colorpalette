import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import {ChromePicker} from 'react-color'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function ColorPickerForm(props) {
    const { colors, setColors, isPaletteFull } = props;
    const [currentColor, setCurrentColor] = useState('');
    const [newColorName, setNewColorName] = useState('');

    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
          return colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          );
        });
      });

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
        <div>
            <ChromePicker color={currentColor} onChangeComplete={e => setCurrentColor(e.hex)}/>
            <ValidatorForm onSubmit={addNewColor}>
                <TextValidator
                    value={newColorName}
                    onChange={handleColorChange}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['This field is required.', 'Color name must be unique.', 'This color is already in the palette.']}
                />
                <Button 
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

export default ColorPickerForm;
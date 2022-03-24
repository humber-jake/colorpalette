import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function NewPaletteFormNav(props) {
    let navigate = useNavigate();
    const { classes, 
            open, 
            palettes,
            handleDrawerOpen,
            colors,
            savePalette
        } = props;

    const [newPaletteName, setNewPaletteName] = useState('');

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
            <CssBaseline />
            <AppBar
                position="fixed"
                color='default'
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Persistent drawer
                </Typography>
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
                    <Link to='/'>
                    <Button 
                        variant='contained'
                        color='primary'  
                    >Go Back
                    </Button>
                    </Link>
                </ValidatorForm>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NewPaletteFormNav;
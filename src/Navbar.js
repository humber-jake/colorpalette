import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'
import { IconButton, MenuItem, Select } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons'

function Navbar(props){
        const { level, changeLevel, updateFormat } = props;
        const [format, setFormat] = useState('hex');
        const [open, setOpen] = useState(false);
        const handleChange = (e) => {
            setFormat(e.target.value)
            updateFormat(e.target.value);
            setOpen(true);
        }
        const closeSnackbar = () => {
            setOpen(false);
        }
        return (
            <header className="Navbar">
                <div className='logo'>
                    <a href="#">swatches</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider" id='slider'>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onChange={changeLevel} 
                            />
                    </div>    
                </div>
                <div className='select-container'>
                    <Select value={format} onChange={handleChange}>
                        <MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                    open={open} 
                    autoHideDuration={3000} 
                    message={<span id='message-id'>Format Changed!</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={closeSnackbar}
                    action={[
                        <IconButton 
                            onClick={closeSnackbar}
                            color='inherit'
                            key='close'
                            aria-label='close'
                        >
                            <Close />
                        </IconButton>
                          ]}
                    />
            </header>
        );
}

export default Navbar;
import React, { useState } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import "./Palette.css"

function Palette(props){

    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const { colors } = props.palette;
    const colorBoxes = colors[level].map(color => (
        <ColorBox key={color['hex']} background={color[format]} name={color.name}/>
    ))


    const changeLevel = level => {
        setLevel(level);
    }
    const updateFormat = f => {
        setFormat(f)
    }

    return (
        <div className="Palette">

            <Navbar 
                level={level} 
                changeLevel={changeLevel}
                updateFormat={updateFormat}
            />

            <div className="Palette-colors">
                {colorBoxes}
            </div>

        </div>
    );
}

export default Palette;
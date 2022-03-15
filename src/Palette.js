import React, { useState } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import "./Palette.css"
import { useParams } from 'react-router-dom';
import { findPalette, generatePalette } from './ColorHelpers';

function Palette(props){

    let { id } = useParams();
    let palette = generatePalette(findPalette(id));
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const { colors, paletteName, emoji } = palette;
    const colorBoxes = colors[level].map(color => (
        <ColorBox key={color.name} paletteId={palette.id} background={color[format]} {...color} showLink/>
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

            <div className="Palette-colors">{colorBoxes}</div>
            <footer className='Palette-footer'>
                {paletteName}
                <span className='emoji'>{emoji}</span>
            </footer>
        </div>
    );
}

export default Palette;
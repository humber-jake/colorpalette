import React, { useState } from 'react';
import Navbar from './Navbar';
import { useParams, Link } from 'react-router-dom';
import { findPalette, generatePalette } from './ColorHelpers';
import ColorBox from './ColorBox';
import PaletteFooter from "./PaletteFooter.js"

function SingleColorPalette(props) {

    let { paletteId, colorId } = useParams();
    let palette = generatePalette(findPalette(paletteId));

    const [format, setFormat] = useState('hex')
    const updateFormat = f => {
        setFormat(f)
    }

    function getShades(palette, id){
        let result = [];
        let colors = palette.colors;

        for(let level in colors){
            result = result.concat(
                colors[level].filter(c => c.id === id)
            )
        }
        return result.slice(1);
    }

    let shades = getShades(palette, colorId);

    let colorBoxes = shades.map(s =>
            <ColorBox key={s.name} {...s} background={s[format]} showLink={false}/>
        )

    return (
        <div className='SingleColorPalette Palette'>
            <Navbar showSlider={false} updateFormat={updateFormat}/>
            <div className="Palette-colors">
                {colorBoxes}
                <div className='go-back ColorBox'>
                    <Link to={`/palette/${paletteId}`} className='back-button'>Go back</Link>
                </div>
            </div>
            <PaletteFooter {...palette}/>
        </div>
    );
}

export default SingleColorPalette;
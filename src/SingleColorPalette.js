import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { findPalette, generatePalette } from './ColorHelpers';
import ColorBox from './ColorBox';

function SingleColorPalette(props) {

    let { paletteId, colorId } = useParams();
    let palette = generatePalette(findPalette(paletteId));

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
            <ColorBox key={s.name} {...s} background={s.hex} showLink={false}/>
        )

    return (
        <div className='Palette'>
            <Navbar />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
        </div>
    );
}

export default SingleColorPalette;
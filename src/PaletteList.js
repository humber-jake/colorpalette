import React from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette.js'

function PaletteList(props) {
    const { palettes } = props;

    console.log(palettes);

    return (
        <div>
            <h1>Palette List</h1>
            {palettes.map(
                p => <Link to={`/palette/${p.id}`}>
                    <MiniPalette {...p}/>
                </Link>
            )}
        </div>
    );
}

export default PaletteList;
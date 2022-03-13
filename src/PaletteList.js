import React from 'react';
import { Link } from 'react-router-dom'

function PaletteList(props) {
    const { palettes } = props;

    console.log(palettes);

    return (
        <div>
            <h1>Palette List</h1>
            {palettes.map(
                p => <Link to={`/palette/${p.id}`}>
                <h2>{p.paletteName}</h2>
                </Link>
            )}
        </div>
    );
}

export default PaletteList;
import React, { useState } from 'react';
import Navbar from './Navbar.js';
import { useParams, Link } from 'react-router-dom';
import { generatePalette } from './ColorHelpers.js';
import ColorBox from './ColorBox.js';
import PaletteFooter from "./PaletteFooter.js"
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles.js'

function SingleColorPalette(props) {

    const { classes, findPalette } = props;
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
            <ColorBox key={s.name} {...s} background={s[format]} showFullPalette={false}/>
        )

    return (
        <div className={classes.palette}>
            <Navbar showSlider={false} updateFormat={updateFormat}/>
            <div className={classes.colors}>
                {colorBoxes}
                <Link to={`/palette/${paletteId}`}>
                    <div className={classes.goBack}>
                        <span className={classes.backButton}>Go back</span>
                    </div>
                </Link>
            </div>
            <PaletteFooter {...palette}/>
        </div>
    );
}

export default withStyles(styles)(SingleColorPalette);
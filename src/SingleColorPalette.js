import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { generatePalette } from './ColorHelpers.js';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox.js';
import Navbar from './Navbar.js';
import NotFound from './NotFound.js';
import PaletteFooter from "./PaletteFooter.js"
import styles from './styles/PaletteStyles.js'

function SingleColorPalette(props) {

    const { classes, findPalette } = props;
    let { paletteId, colorId } = useParams();
    const [format, setFormat] = useState('hex')
    let foundPalette = findPalette(paletteId);

    // Validates first route param
    if(!foundPalette) return <NotFound missingItem='palette'/>

    let palette = generatePalette(foundPalette);

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
        // Removes "50" level -- is always generated as #fff, but is necessary for accurate palette generation.
        return result.slice(1);
    }

    let shades = getShades(palette, colorId);

    // Validates second route param
    if(shades.length === 0) return <NotFound missingItem='color'/>

    let colorBoxes = shades.map(s =>
            <ColorBox key={s.name} {...s} background={s[format]} showFullPalette={false}/>
        )

    return (
        <div className={classes.palette}>
            <Navbar showSlider={false} updateFormat={updateFormat}/>
            <div className={classes.colors}>

                {colorBoxes}

                {/* Go Back link */}
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
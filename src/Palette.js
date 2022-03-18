import React, { useState } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import { useParams } from 'react-router-dom';
import { findPalette, generatePalette } from './ColorHelpers';
import PaletteFooter from './PaletteFooter.js';
import { withStyles } from "@material-ui/styles"
import styles from './styles/PaletteStyles.js'

function Palette(props){

    const { classes } = props;
    let { id } = useParams();
    let palette = generatePalette(findPalette(id));
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const { colors } = palette;
    const colorBoxes = colors[level].map(color => (
        <ColorBox key={color.name} paletteId={palette.id} background={color[format]} {...color} showFullPalette/>
    ))

    const changeLevel = level => {
        setLevel(level);
    }
    const updateFormat = f => {
        setFormat(f)
    }

    return (
        <div className={classes.palette}>
            <Navbar 
                level={level} 
                changeLevel={changeLevel}
                updateFormat={updateFormat}
                showSlider
            />
            <div className={classes.colors}>{colorBoxes}</div>
            <PaletteFooter {...palette}/>
        </div>
    );
}

export default withStyles(styles)(Palette);
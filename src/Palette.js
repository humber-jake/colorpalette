import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generatePalette } from './ColorHelpers';
import { withStyles } from "@material-ui/styles"
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter.js';
import NotFound from './NotFound';
import styles from './styles/PaletteStyles.js'

function Palette(props){

    const { classes, findPalette } = props;
    let { id } = useParams();
    let foundPalette = findPalette(id)
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    
    if(!foundPalette) return <NotFound missingItem='palette'/>
    
    let palette = generatePalette(foundPalette);
    const { colors } = palette;
    const colorBoxes = colors[level].map(color => (
        <ColorBox key={color.name} paletteId={palette.id} background={color[format]} {...color} showFullPalette/>
    ))



    function changeLevel(level){
        setLevel(level);
    }
    function updateFormat(f){
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
            <div className={classes.colors}>
                {colorBoxes}
            </div>

            <PaletteFooter {...palette}/>
        </div>
    );
}

export default withStyles(styles)(Palette);
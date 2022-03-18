import React from 'react';
import { withStyles } from "@material-ui/styles"
import styles from './styles/MiniPaletteStyles.js'

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors} = props;
    const thumbnail = colors.map(c => (
        <div className={classes.miniColor} style={{backgroundColor: c.color}}></div>
    ))
    return (
        <div className={classes.root}>
            <div className={classes.colors}>
                {thumbnail}
            </div>
            <h5 className={classes.title}>{paletteName} <span>{emoji}</span></h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);
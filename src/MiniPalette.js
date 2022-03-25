import React from 'react';
import { withStyles } from "@material-ui/styles"
import styles from './styles/MiniPaletteStyles.js'
import { DeleteForever } from '@material-ui/icons'

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors} = props;
    const thumbnails = colors.map(c => (
        <div key={c.color} className={classes.miniColor} style={{backgroundColor: c.color}}/>
    ))
    return (
        <div className={classes.root}>
            <div className={classes.delete}>
                <DeleteForever 
                    className={classes.deleteForever}
                    style={{transition: 'all 200ms ease-in-out'}}
                />
            </div>
            <div className={classes.colors}>
                {thumbnails}
            </div>
            <h5 className={classes.title}>{paletteName} <span>{emoji}</span></h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);
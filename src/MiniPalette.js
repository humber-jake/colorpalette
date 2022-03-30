import React from 'react';
import { withStyles } from "@material-ui/styles"
import { DeleteForever } from '@material-ui/icons'
import styles from './styles/MiniPaletteStyles.js'

function MiniPalette(props) {
    
    const { classes, paletteName, emoji, colors, id, openDialog} = props;

    const thumbnails = colors.map(c => (
        <div key={c.color} className={classes.miniColor} style={{backgroundColor: c.color}}/>
    ))
    
    // click handler to trigger openDialog function passed down from App.js that can delete palettes from storage
    function handleOpen(e){
        e.preventDefault();
        openDialog(id);
    }

    return (
        <div className={classes.root}>
            <div className={classes.delete}>
                <DeleteForever 
                    className={classes.deleteForever}
                    style={{transition: 'all 200ms ease-in-out'}}
                    onClick={handleOpen}
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
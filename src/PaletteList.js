import React from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette.js'
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles.js'

function PaletteList(props) {
    const { palettes, classes } = props;
    const allPalettes = palettes.map(
        p => <Link className={classes.link} key={p.id} to={`/palette/${p.id}`}>
            <MiniPalette {...p}/>
        </Link>
    )

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>Swatches</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <div className={classes.palettes}>
                    {allPalettes}
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(PaletteList);
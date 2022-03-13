import React from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette.js'
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: 'darkgray',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    },
}

function PaletteList(props) {
    const { palettes, classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>Swatches</h1>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map(
                        p => <Link key={p.id} to={`/palette/${p.id}`}>
                            <MiniPalette {...p}/>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(PaletteList);
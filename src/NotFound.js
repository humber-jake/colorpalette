import React from 'react';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import styles from './styles/NotFoundStyles.js'

function PaletteList(props) {

    const { classes, missingItem } = props;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <Link to='/'>
                        <h1>Swatches</h1>
                    </Link>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav >
                <div>
                    <h1>Something went wrong.</h1>
                    <p>We couldn't find a {missingItem} by that name. Try going back and selecting a different {missingItem}.</p>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(PaletteList);
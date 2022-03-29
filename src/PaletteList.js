import React from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette.js'
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function PaletteList(props) {

    const { palettes, classes, deletePalette } = props;
    const allPalettes = palettes.map(
        (p) => 
        <CSSTransition key={p.id} classNames='fade' timeout={500}>
            <Link className={classes.link} key={p.id} to={`/palette/${p.id}`}>
                <MiniPalette key={p.id} {...p} deletePalette={deletePalette}/>
            </Link>
        </CSSTransition>
    )

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>Swatches</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav >
                    <TransitionGroup className={classes.palettes}>
                        {allPalettes}
                    </TransitionGroup>
            </div>
        </div>
    );
}

export default withStyles(styles)(PaletteList);
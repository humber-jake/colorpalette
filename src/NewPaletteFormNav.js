import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AddCircleOutlineOutlined} from '@material-ui/icons/';
import { withStyles } from '@material-ui/core';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import NewPaletteDialogue from './NewPaletteDialogue';
import styles from './styles/NewPaletteFormNavStyles'

function NewPaletteFormNav(props) {
    const { classes, 
            open, 
            palettes,
            handleDrawerOpen,
            colors,
            savePalette
        } = props;

    const [formShowing, setFormShowing] = useState(false);
      
    function showForm(){
      setFormShowing(true);
    }
    function hideForm(){
      setFormShowing(false);
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color='default'
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.addCircle, open && classes.hide)}
                >
                    <AddCircleOutlineOutlined />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Create New Palette
                </Typography>
                </Toolbar>
                <div className={classes.navButtons}>
                        <Link to='/'>
                            <Button variant='contained'color='secondary' className={classes.button}>
                              Go Back
                            </Button>
                        </Link>
                        <Button variant="contained" color="primary" onClick={showForm} className={classes.button}>
                          Save
                        </Button>
                    </div>
            </AppBar>

            {formShowing &&
              <NewPaletteDialogue
                      savePalette={savePalette}
                      colors={colors} 
                      palettes={palettes}
                      hideForm={hideForm}
                    />}
        </div>
    );
}

export default withStyles(styles, {withTheme: true})(NewPaletteFormNav);
import React, { useState } from 'react';
import MiniPalette from './MiniPalette.js'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import { blue, red } from "@material-ui/core/colors/";
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles.js'

function PaletteList(props) {

    const { palettes, classes, deletePalette } = props;
    const allPalettes = palettes.map(
        (p) => 
        <CSSTransition key={p.id} classNames='fade' timeout={500}>
            <Link className={classes.link} key={p.id} to={`/palette/${p.id}`}>
                <MiniPalette key={p.id} {...p} openDialog={openDialog}/>
            </Link>
        </CSSTransition>
    )
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    function openDialog(id){
        setIsDeleteOpen(true)
        setDeleteId(id);
    }
    function closeDialog(){
        setIsDeleteOpen(false)
    }
    function handleDelete(){
        deletePalette(deleteId);
        setIsDeleteOpen(false)
    }

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
            <Dialog
                open={isDeleteOpen}
                aria-labelledby='delete-dialog-title'
                onClose={closeDialog}
            >
                <DialogTitle id='delete-dialog-title'>
                    Delete This Palette?
                </DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar
                            style={{ backgroundColor: blue[100], color: blue[600] }}
                            >
                            <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Delete' />
                    </ListItem>
                    <ListItem button onClick={closeDialog}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                            <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Cancel' />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}

export default withStyles(styles)(PaletteList);
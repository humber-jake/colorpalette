import React from 'react';
import {withStyles} from '@material-ui/styles'
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from "@material-ui/icons/Delete"
import styles from './styles/DraggableColorBoxStyles'

const DraggableColorBox = SortableElement((props) => {
    const {classes, background, name, deleteColor} = props;

    return (
        <div className={classes.root} style={{backgroundColor: background}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <span><DeleteIcon className={classes.deleteIcon} onClick={deleteColor}/></span>
            </div>
        </div>
    );
})

export default withStyles(styles)(DraggableColorBox);
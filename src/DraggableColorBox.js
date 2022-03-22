import React from 'react';
import {withStyles} from '@material-ui/styles'
import DeleteIcon from "@material-ui/icons/Delete"
import chroma from 'chroma-js'

const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin:  '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover svg": {
            color: props => chroma(props.color).luminance() < 0.06 ? 'rgba(255, 255, 255, 1.0)' : 'rgba(0, 0, 0, 0.6)',
            transform: 'scale(1.5)'
        }
    },
    boxContent: {
        position: 'absolute',
        color: props => chroma(props.color).luminance() < 0.06 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        transition: "all 300ms ease-in-out"
    }
}

function DraggableColorBox(props) {
    const {classes, color, name} = props;
    return (
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <span><DeleteIcon className={classes.deleteIcon}/></span>
            </div>
        </div>
    );
}

export default withStyles(styles)(DraggableColorBox);
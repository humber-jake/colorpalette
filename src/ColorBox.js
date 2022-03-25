import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles'
import styles from './styles/ColorBoxStyles.js'
import CopyMessage from './CopyMessage.js';


function ColorBox(props){

    const { name, background, paletteId, id, showFullPalette, classes } = props;
    const [copied, setCopied] = useState(false);
    
    function changeCopyState(){
        setCopied(true)
        setTimeout(() => {
            setCopied(false);
        }, 4500);
    }

    return (
            <CopyToClipboard text={background} onCopy={changeCopyState}>
            
            

            <div style={{background}} className={classes.colorBox}>
          
                <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}/>

                <div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}`}>
                    <div className={classes.copyText}>
                        {copied && <CopyMessage background={background}/>}
                    </div>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>

                {showFullPalette && 
                    <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>More</span> 
                    </Link>
                }
            </div>
            </CopyToClipboard>
    );
}

export default withStyles(styles)(ColorBox);
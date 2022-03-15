import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

function ColorBox(props){

    const { name, background, paletteId, id, showLink } = props;
    const [copied, setCopied] = useState(false);
    const isDark = (chroma(background).luminance() <= 0.05);
    const isLight = (chroma(background).luminance() >= 0.6);
    
    function changeCopyState(){
        setCopied(true)
        setTimeout(() => {
            setCopied(false);
        }, 1400);
    }



    return (
            <CopyToClipboard text={background} onCopy={changeCopyState}>

            <div style={{background}} className='ColorBox'>
                <div style={{background}} className={`copy-overlay ${copied && 'show'}`}/>
                <div className={`copy-msg ${copied && 'show'}`}>
                    <div className={isLight ? 'dark-text' : undefined}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={isDark ? 'light-text' : undefined}>{name}</span>
                    </div>
                    <button className={isLight ? 'dark-text copy-button' : 'copy-button'}>Copy</button>
                </div>

                {showLink && 
                    <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={isLight ? 'dark-text see-more' : 'see-more'}>More</span> 
                    </Link>
                }
            </div>
            </CopyToClipboard>
    );
}

export default ColorBox;
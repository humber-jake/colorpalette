import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

function ColorBox(props){

    const { name, background } = props;
    const [copied, setCopied] = useState(false);

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
                <h1>Copied!</h1>
                <p>{background}</p>
            </div>
            <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <button className='copy-button'>Copy</button>
            </div>
            <span className='see-more'>More</span>
        </div>
        </CopyToClipboard>
    );
}

export default ColorBox;
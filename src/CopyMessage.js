import React from 'react';
import chroma from 'chroma-js'
import './styles/CopyMessage.css'

function CopyMessage(props) {

    const { background } = props;

    // use 'background' color prop to determine dark or light dynamic class for the text and the animated object
    function textColor(){
        return  chroma(background).luminance() > 0.06 ? 'text-dark' : 'text-light'
    }
    function backgroundColor(){
        return  chroma(background).luminance() > 0.06 ? 'background-dark' : 'background-light'
    }

    return (
        <div className='Copy-Message' style={{backgroundColor: background}}>

            {/* animated object code */}
            <div className="stage">
                <div className={`wrapper ${textColor()}`}>
                    <div className={`slash ${backgroundColor()}`}></div>
                    <div className={`sides ${textColor()}`}>
                        <div className={`side ${backgroundColor()}`}></div>
                        <div className={`side ${backgroundColor()}`}></div>
                        <div className={`side ${backgroundColor()}`}></div>
                        <div className={`side ${backgroundColor()}`}></div>
                    </div>
                    <div className="text">
                        <div className="text--backing">Copied!</div>
                        <div className="text--left">
                            <div className="inner">Copied!</div>
                        </div>
                        <div className="text--right">
                            <div className="inner">Copied!</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Color value */}
            <div className={`colorName ${textColor()}`}>
                {background}
            </div>
        </div>
    );
}

export default CopyMessage;
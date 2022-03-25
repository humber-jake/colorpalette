import React from 'react';
import './styles/CopyMessage.css'
import chroma from 'chroma-js'

function CopyMessage(props) {

    const { background } = props;

    const textColor = (background) => {
        return  chroma(background).luminance() > 0.06 ? 'text-dark' : 'text-light'
    }
    const backgroundColor = (background) => {
        return  chroma(background).luminance() > 0.06 ? 'background-dark' : 'background-light'
    }

    return (
       
        <div className='Copy-Message' style={{backgroundColor: background}}>
            <div className="stage">
                <div className={`wrapper ${textColor(background)}`}>
                    <div className={`slash ${backgroundColor(background)}`}></div>
                    <div className={`sides ${textColor(background)}`}>
                        <div className={`side ${backgroundColor(background)}`}></div>
                        <div className={`side ${backgroundColor(background)}`}></div>
                        <div className={`side ${backgroundColor(background)}`}></div>
                        <div className={`side ${backgroundColor(background)}`}></div>
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
            <div className={`colorName ${textColor(background)}`}>
                {background}
            </div>
        </div>
    );
}

export default CopyMessage;
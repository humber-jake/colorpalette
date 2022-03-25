import chroma from 'chroma-js'

export const DRAWER_WIDTH = 400;
export const DYNAMIC_TEXT_COLOR = (props) => chroma(props.background).luminance() < 0.06 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
export const DYNAMIC_BUTTON_COLOR = (props) => chroma(props.background).luminance() > 0.7 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
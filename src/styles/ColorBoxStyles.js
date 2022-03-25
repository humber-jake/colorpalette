import { DYNAMIC_TEXT_COLOR, DYNAMIC_BUTTON_COLOR } from '../constants'
import sizes from './sizes'

const styles = {
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '14px',
    },
    colorBox : {
        width: '20%',
        height: props => (props.showFullPalette ? "25%" : "50%"),
        margin:  '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover button": {
            opacity: 1,
            transition: "opacity 200ms linear"
        },
        [sizes.andDown("lg")]: {
            width: "25%",
            height: props => (props.showingFullPalette ? "20%" : "33.3333%")
          },
          [sizes.andDown("md")]: {
            width: "50%",
            height: props => (props.showingFullPalette ? "10%" : "20%")
          },
          [sizes.andDown("xs")]: {
            width: "100%",
            height: props => (props.showingFullPalette ? "5%" : "10%")
          },
    },
    colorName: {
        color: DYNAMIC_TEXT_COLOR
    },
    copyButton: {
        color: DYNAMIC_BUTTON_COLOR,
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: '#ffffff44',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        border: 'none',
        opacity: "0"
    },
    copyMessage: {
        position: 'fixed',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.001)',
        opacity: 0,
        color: 'white',
        "& h1": {
            textAlign: 'center',
            marginBottom: 0,
            lineHeight: '70%',
        },
        "& p": {
            width: '20%',
            textAlign: 'right',
            margin: 0,
        }
    },
    copyOverlay: {
        opacity: 0,
        zIndex: 0,
        width: "100%",
        height: '100%',
        transition: 'transform 700ms ease-in-out',
        transform: 'scale(0.1)',
    },
    copyText: {
        color: DYNAMIC_BUTTON_COLOR
    },
    seeMore: {
        color: DYNAMIC_BUTTON_COLOR,
        background: '#ffffff44',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
    },
    showCopyMessage: {
        opacity: 1,
        transform: 'scale(1)',
        zIndex: 15,
        transition: 'opacity 400ms ease-in-out',
        transitionDelay: '100ms',
    },
    showOverlay: {
        opacity: 1,
        transform: 'scale(50)',
        zIndex: 10,
        position: 'absolute',
    }
}

export default styles;
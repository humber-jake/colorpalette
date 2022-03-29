import sizes from './sizes'

const styles = {
    "@global": {
        '.fade-exit': {
            opacity: 1
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-out'
        },
    },
    palette: {
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        [sizes.andDown("lg")]: {
            overflowY: 'auto'
          },
    },
    colors: {
        height: '90%'
    },
    backButton: {
        color: 'rgba(255, 255, 255, 1)',
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
        background: '#888888',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        border: 'none',
        opacity: 0.5,
    },
    goBack : {
        width: '20%',
        height: "50%",
        margin:  '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        background: 'black',
        marginBottom: '-3.5px',
        "&:hover span": {
            opacity: 1,
            transition: "opacity 200ms linear"
        },
        [sizes.andDown("lg")]: {
            width: "25%",
            height: "33.3333%"
        },
        [sizes.andDown("md")]: {
        width: "50%",
        height: "20%"
        },
        [sizes.andDown("xs")]: {
        width: "100%",
        height: "10%"
        },
    }
}

export default styles;
import sizes from './sizes'
import bg from './bg.svg'

// Background courtesy of svgbackgrounds.com

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
    root: {
        backgroundColor: '#FFF6DC',
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'scroll',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'auto'
    },
    container: {
        width: '50%',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        [sizes.andDown("xl")]: {
            width: "80%"
        },
        [sizes.andDown("xs")]: {
            width: "75%"
        }
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'flex-end',
        "& a": {
            fontSize: '1.5rem',
            textDecoration: 'none',
            color: 'white',
            marginRight: '1.5rem',
            marginBottom: '0.2rem',
            textShadow: '2px 2px #99badd',
            '&:hover':{
                textShadow: '0px 0px 10px white'
            }   
        },
        "& h1": {
            fontSize: '3rem',
            marginBottom: 0,
            textShadow: '3px 3px #99badd'
            
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '2.25rem',
        [sizes.andDown("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.andDown("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1.4rem"
        },
        '& a': {
            borderRadius: '4px',
            boxShadow: '3px 3px #99badd',
            '&:hover':{
                boxShadow: '0px 0px 10px white'
            }   
        }
    },
    link: {
        textDecoration: 'none'
    }
}
export default styles;
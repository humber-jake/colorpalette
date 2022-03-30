import sizes from './sizes'
import bg from './bg.svg'

const styles = {
    root: {
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
        },
        "& div":{
            marginTop: '3rem',
            padding: '2.5rem',
            borderRadius: '25px',
            backgroundColor: '#ffffffaa',
            "& h1":{
                marginTop: '2rem',
                marginBottom: '2rem',
                fontSize: '3rem',
                color: '#f0729b'
            },
            "& p":{
                color: '#7d9dbf',
                fontSize: '1.25rem'
            },   
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
    link: {
        textDecoration: 'none'
    }
}
export default styles;
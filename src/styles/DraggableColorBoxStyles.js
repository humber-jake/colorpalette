import { DYNAMIC_TEXT_COLOR } from "../constants";
import sizes from './sizes'

const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin:  '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4.5px',
        "&:hover svg": {
            color: DYNAMIC_TEXT_COLOR,
            transform: 'scale(1.5)'
        },
        [sizes.andDown("lg")]: {
            width: "25%",
            height: "20%"
        },
        [sizes.andDown("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.andDown("sm")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        position: 'absolute',
        color: DYNAMIC_TEXT_COLOR,
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        transition: "all 300ms ease-in-out"
    }
}

export default styles;
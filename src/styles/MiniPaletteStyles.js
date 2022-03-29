import { Transform } from "@material-ui/icons";

const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover svg': {
            right: '-17px'
        }
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative',
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3px !important'   
    },
    delete: {},
    deleteForever: {
        marginLeft: '0',
        color: 'white',
        backgroundColor: '#dd0022',
        height: '28px',
        width: '28px',
        position: 'absolute',
        right: '-100px',
        bottom: '0px',
        borderRadius: '4px',
        padding: '3px 30px 3px 5px',
        zIndex: 10,
    }
}
export default styles;
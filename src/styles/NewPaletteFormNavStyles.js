import { DRAWER_WIDTH } from "../constants";
import sizes from './sizes'

const styles = theme => ({
    root: {
        display:'flex',
    },
    hide: {
      display: 'none',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      },
      appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      }, 
      navButtons: {
        marginRight: '1rem',
        "& a": {
          textDecoration: 'none'
        },
        [sizes.andDown('xs')]: {
          marginRight: '0.5rem',
        }
      },
      button: {
        margin: '0 0.5rem',
        [sizes.andDown('xs')]: {
          margin: '0 0.2rem',
          padding: '0.3rem'
        }
      }
})

export default styles;
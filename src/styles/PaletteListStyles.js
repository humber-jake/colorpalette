import sizes from './sizes'

const styles = {
    root: {
        backgroundColor: 'darkgray',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
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
        alignItems: 'center',
        "& a": {
            textDecoration: 'none',
            color: 'white',
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
        }
    },
    link: {
        textDecoration: 'none'
    }
}
export default styles;
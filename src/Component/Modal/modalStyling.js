import { createUseStyles } from "react-jss";
const modalStyling = createUseStyles({
    '$:before': {
        content: '',
        display: 'inline-block',
        height: '100%',
        verticalAlign: 'middle',
        backgroundColor: 'red'
    },
    modalBG: {
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.7)',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000'
    },

    openPostModal: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        minHeight: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '150px 0',
        zIndex: '1000'

    }
})

export default modalStyling
import { createUseStyles } from "react-jss";

const modalStyling = createUseStyles({
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
    },
})

export default modalStyling
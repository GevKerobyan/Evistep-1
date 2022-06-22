
import { createUseStyles } from "react-jss";

export const postModalStyling = createUseStyles({
    modalWrapper: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        left: '0',
        top: '0',
        bottom: '0',
        right: '0',
        backgroundColor: 'rgba(0,0,0,0.8)',
        boxShadow: '2px 5px 10px aliceblue'
    },
    
})
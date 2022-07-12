import { createUseStyles } from "react-jss";

const userContainerStyles = createUseStyles({

    userPicture: {
        maxHeight: '130px',
        height: '100px',
        width: 'auto',
        marginRight: '50px'
    },

    userInfo: {
        margin: ' 0 25px',
    },

    showMore: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '5px',
		height: '50px',
		width: '250px',
		display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        fontSize: '24px',
		backgroundColor: 'lightblue',
        
		}
})

export default userContainerStyles;
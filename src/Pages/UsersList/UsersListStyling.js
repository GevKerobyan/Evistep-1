import { createUseStyles } from "react-jss";

const userConatinerStyles = createUseStyles({
    usersPage: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '50px 200px'
    },

    userContainer: {
        width: '500px',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '15px 0',
        padding: '15px',
        backgroundColor: 'white',
    },

    userPicture: {
        maxHeight: '120px',
        width: 'auto',
    },

    userInfo: {
        margin: ' 0 15px',

    },

    userId:{
        marginBottom: '10px'

    },
})

export default userConatinerStyles;
import { createUseStyles } from "react-jss";

const userConatinerStyles = createUseStyles({
    usersPage: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '50px 200px',
        // backgroundColor: '#3c4cad',
        // backgroundImage: 'linear-gradient(180deg,#3c4cad,#c24ca2,#ff6d7d,#ffb05d,#f9f871)',
        // backgroundSize: 'contain',
        color: '#6b7280',
    },

    userListNavBar: {
        width: '100%',
        height: '50px',
        padding: '5px 200px',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: '5px',
        left: '0',
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: 'silver',
        '& div': {
            padding: '8px 10px',
            backgroundColor: 'rgb(30,64,175)',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer',
        }
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
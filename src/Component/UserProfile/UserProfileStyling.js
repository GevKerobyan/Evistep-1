import { createUseStyles } from "react-jss";

const UserProfileStyles = createUseStyles({
    pageContainer: {
        padding: '50px 100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    userContainer: {
        width:'1000px',
        height: '200px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
        marginBottom: '50px',
        borderRadius:'5px',
        boxShadow: '5px 4px 10px rgba(94,97,100,1)',
        '& div': {
            textAlign: 'left',
            '& span': {
                fontWeight: 'bold',
            }
        }
    },

    left: {    
        // textAlign: 'left',
    },

    middle: {
      '& div': {
            margin: ' 20px 0',
        }
    },

    middleTop: {},

    middleBottom: {},

    right: {},

    userFooter: {
        width: 'calc(100% - 400px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& div': {
            margin: '0 20px',
            padding: '8px 8px',
            backgroundColor: 'aliceblue',
            borderRadius: '5px',
            boxShadow: '5px 4px 10px rgba(94,97,100,1)',
            cursor:'pointer',
        }
    },
})

export default UserProfileStyles
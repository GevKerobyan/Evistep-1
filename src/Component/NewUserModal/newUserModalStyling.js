import { createUseStyles } from "react-jss";

export const newUserModalStyling = createUseStyles({

    modalContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        color: 'rgb(11,12,16)',
        '& form': {
          height: '100%',
          display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'stretch',
        }
    },


    inputWrapper: {
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inputs: {
        width: '50%',
        // height: '90%',
        padding: '4px 10px',
        border: '1px solid black',
        borderRadius: '4px',
        color: 'rgb(11,12,16)',
    },

    buttonsContainer: {
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    submitButton: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        boxShadow: '1px 2px 6px rgb(0,0,0)',
        color: 'white',
        backgroundColor: 'rgb(122,38,64)'
    },
})

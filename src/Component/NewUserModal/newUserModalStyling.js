import { createUseStyles } from "react-jss";

export const newUserModalStyling = createUseStyles({

    modalBG: {
        position: 'fixed',
        backgroundColor: 'darkgrey',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // color: 'mediumslateblue',
    },

    modalContainer: {
        position: 'relative',
        width: '600px',
        height: '400px',
        padding: '50px 50px',
        boxShadow: '1px 2px 6px rgb(0,0,0)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: '#557a95',
        color: 'rgb(11,12,16)',

        '& div': {
            width: '100%',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            '& input': {
                width: '50%',
                height: '90%',
                padding: '4px',
                border: 'none',
                borderRadius: '4px',
                boxShadow: '1px 2px 4px rgb(0,0,0)',
                color: 'rgb(11,12,16)',


            }
        },
    },



    submitButton: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        boxShadow: '1px 2px 6px rgb(0,0,0)',
        color: 'white',
        backgroundColor: 'rgb(122,38,64)'
    },

    registerPopUp: {
        position: 'absolute',
        width: '350px',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7395ae',
        borderRadius: '10px',
        boxShadow: '1px 2px 6px rgb(0,0,0)',
        zIndex: '200',
        '& p': {
            height: '30px',
            textAlign: 'center',
            margin: '10px 0',
            fontSize: '20px',
            lineHeight: '30px',
            color: 'rgb(11,12,16)',
        }
    }
})

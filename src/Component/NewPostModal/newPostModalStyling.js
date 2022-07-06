import { createUseStyles } from "react-jss";

export const postModalStyling = createUseStyles({

    modalContainer: {
        position: 'relative',
        width: '600px',
        height: '500px',
        padding: '50px 50px',
        boxShadow: '1px 2px 6px rgb(0,0,0)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: 'rgba(85, 122, 149, 0.8)',
        color: 'rgb(11,12,16)',
    },

    inputWrapper: {
        width: '100%',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    uploadInputWrapper: {
        width: '100%',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    uploadButton: {
        lineHeight: '20px',
        width: '60%',
        backgroundColor: 'rgb(122,38,64)',
        borderRadius: '25px',
        padding: '5px 15px',
        color: 'white',
        padding: '8px',
        fontSize: '14px',
        '&::file-selector-button' : {
            marginRight: '35px',
            border: 'none',
            borderRadius: '15px',
            fontSize: '14px'
        }
    },

    tagsInputWrapper: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    tagsInputTop: {
        position: 'relative',
        width: '100%',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& button': {
            position: 'absolute',
            height: '25px',
            width: '25px',
            right: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: 'transparent',
            color: 'bkack',
            fontWeight: 'bold',
            fontSize: '20px'
        }
    },

    tagsInputandButton: {
        width: '70%',
        height: '40px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    tagsInput: {
        width: '100%',
        height: '90%',
        padding: '4px 10px',
        border: 'none',
        borderRadius: '4px',
        // boxShadow: '1px 2px 4px rgb(0,0,0)',
        color: 'rgb(11,12,16)',
    },

    tagsDisplay: {
        width: '500px',
        height: 'auto',
        maxHeight: '100px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        '& span': {
            margin: '5px 10px',
            padding: '4px 8px',
            backgroundColor: 'crimson',
            borderRadius: '4px',
            color: 'aliceblue',
        }
    },

    textInputWrapper: {
        width: '100%',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textInput: {
        width: '70%',
        maxHeight: '80px',
        height: '40px',
        padding: '10px',
        borderRadius: '5px',
        // boxShadow: '1px 2px 4px rgb(0,0,0)',
        overflow:'hidden',
    },

    buttonsContainer: {
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: '20px',
    },

    button: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        // boxShadow: '1px 2px 6px rgb(0,0,0)',
        color: 'white',
        backgroundColor: 'rgb(122,38,64)'
    },
})

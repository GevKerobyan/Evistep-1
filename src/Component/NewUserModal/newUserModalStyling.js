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
        color: 'aliceblue',
    },

    modalContainer: {
        width: '600px',
        height: '400px',
        padding: '50px 0',
        boxShadow: '1px 2px 6px rgb(0,0,0)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '10px',
        '& div': {
            // margin: '10px 0',
            // height: '40px',
            width: '500px',
            borderRadius: '5px',
        }
    },
    
    nameInputWrapper: {},

    nameInput: {},

    lastNameInputWrapper: {},

    lastNameInput: {},

    mailInputWrapper: {},
    
    mailInput: {},
})

//     modalBG: {
//         position: 'fixed',
//         backgroundColor: 'darkgrey',
//         top: '0',
//         bottom: '0',
//         left: '0',
//         right: '0',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: 'aliceblue',
//     },

//     modalContainer: {
//         width: '600px',
//         height: '400px',
//         padding:'50px 0',
//         boxShadow: '1px 2px 6px rgb(0,0,0)',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         borderRadius: '10px',
//         '& div': {
//             // margin: '10px 0',
//             // height: '40px',
//             width: '500px',
//             borderRadius: '5px',

//         }

//     },

//     uploadInputWrapper: {
//         padding: '4px 8px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'RGBa(0, 0,0,0.7)',
//         '& input': {
//             padding: '4px 10px',
//             width: '200px',
//             // backgroundColor: 'aliceblue',
//             border: 'none',
//             color: 'aliceblue'
//         }
//     },

//     tagsInputWrapper: {
//         maxHeight: '350px',
//         height:'auto',
//         padding: '4px 8px',
//         display: 'flex',
//         margin: '25px 0',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         '& input': {
//             height: '25px',
//             padding: '4px 10px',
//             backgroundColor: 'RGBa(0, 0,0,0.4)',
//             border: 'none',
//             color: 'aliceblue',
//             borderRadius: '5px'
//         }
//     },

//     tagsInputTop: {
//         width: '500px',
//         padding: '4px 8px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         '& button': {
//             height: '25px',
//             width: '25px',
//             border: 'none',
//             borderRadius: '4px',
//             boxShadow: '1px 2px 6px rgb(0,0,0)'
//         }
//     },

//     tagsDisplay: {
//         width: '500px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',        
//         '& span' : {
//             margin: '5px 10px',
//             padding: '4px 8px',
//             backgroundColor: 'crimson',
//             borderRadius: '4px',
//             color: 'aliceblue',
//         }
//     },

//     textInputWrapper: {
//         width: '500px',
//         margin:'20px 0'

//     },
// })

import { createUseStyles } from "react-jss";

export const loginStylings = createUseStyles({
   modalContainer: {
      position: 'relative',
      width: '500px',
      height: '300px',
      padding: '50px 50px 10px 50px',
      boxShadow: '1px 2px 6px rgb(0,0,0)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      backgroundColor: 'rgba(85, 122, 149, 0.9)',
      color: 'rgb(11,12,16)',
      '& h2': {
         position: 'absolute',
         top: '25px',
         left: '50%',
         transform: 'translate(-50%, 0)'
      }
  },

  inputWrapper: {
      width: '100%',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '10px 0' 
  },

  inputs: {
      width: '50%',
      height: '90%',
      padding: '4px',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '1px 2px 4px rgb(0,0,0)',
      color: 'rgb(11,12,16)',
  },

  buttonsContainer: {
      width: '100%',
      marginTop: '10px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
  },

  button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '1px 2px 6px rgb(0,0,0)',
      color: 'white',
      backgroundColor: 'rgb(122,38,64)'
  },
})


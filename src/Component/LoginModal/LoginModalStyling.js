import { createUseStyles } from "react-jss";

export const loginStylings = createUseStyles({
   modalContainer: {
      position: 'relative',
      width: '100%',
      height: '300px',
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


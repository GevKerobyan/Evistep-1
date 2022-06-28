import { createUseStyles } from "react-jss";

const editProfileStyling =  createUseStyles({
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
      backgroundColor: 'rgba(85, 122, 149, 0.8)',
      color: 'rgb(11,12,16)',
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
      height: '90%',
      padding: '4px',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '1px 2px 4px rgb(0,0,0)',
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

export default editProfileStyling
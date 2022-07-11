import { createUseStyles } from "react-jss";

const editProfileStyling =  createUseStyles({
    modalContainer: {
		minHeight: '80%',
        width: '90%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	inputWrapper: {
		width: '100%',
		height: '40px',
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
      marginTop: '15px',
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
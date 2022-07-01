import { createUseStyles } from 'react-jss';

const navBarStyling = createUseStyles({
	
	navWrapper: {
		position: 'fixed',
		width: '100%',
		left: '0',
		
		top: '0',
		height: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 15%',
		backgroundColor: `white`,
		transition: 'all 0.5s',
		boxShadow: '1px 1px 3px rgb(0, 0, 50)',
		zIndex: '999'
	},

	leftLinkContainer: {
		width: '25%',
		minWidth: '200px',
		display: 'flex',
		justifyContent: 'space-between',
		color: 'black'
	},

	container: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	userContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '5px 20px',
		// backgroundColor: 'red',
	},

	userImageContainer: {
		width: '40px',
		height: '40px',
		borderRadius: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},

	userImg: {
		width: '40px',
		height: '40px',
	},

	userName: {
		width: '200px',
		height: '35px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: '4px',
		marginLeft: '20px',
		backgroundColor: 'silver',
	},

	searchContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: '50px',
		color:'black'
	},

	searchInput: {
		height: '25px',
		padding: '4px 10px',
		border: 'none',
		borderRadius: '4px',
		marginLeft: '25px',
		backgroundColor: 'silver',
	},

});

export default navBarStyling;

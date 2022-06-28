import { createUseStyles } from 'react-jss';

const navBarStyling = createUseStyles({
	navWrapper: {
		width: '100%',
		height: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '15px 200px',
		backgroundColor: 'RGB(146, 168, 209)',
	},

	home: {
		width: '50px',
	},

	container: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		'& button': {
			padding: '10px 15px',
			border: 'none',
			borderRadius: '4px',
			boxShadow: '1px 2px 6px rgb(0,0,0)',
			color: 'white',
			backgroundColor: 'rgb(122,38,64)',
			marginLeft: '20px',
		},
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
		backgroundColor: 'azure',
		borderRadius: '4px',
		marginLeft: '20px',
	},

	searchContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: '50px',
	},

	searchInput: {
		height: '25px',
		pading: '4px 10px',
		border: 'none',
		borderRadius: '4px',
		marginLeft: '25px',
	},

	// button: {
	// 	padding: '10px 15px',
	// 	border: 'none',
	// 	borderRadius: '4px',
	// 	boxShadow: '1px 2px 6px rgb(0,0,0)',
	// 	color: 'white',
	// 	backgroundColor: 'rgb(122,38,64)',
	// 	marginLeft: '20px',
	// },
});

export default navBarStyling;

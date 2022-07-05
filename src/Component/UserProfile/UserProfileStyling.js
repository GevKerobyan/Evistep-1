import { createUseStyles } from 'react-jss';

const UserProfileStyles = createUseStyles({
	// pageContainer: {
	// 	minHeight: '100vh',
	// 	padding: '0 5%',
	// 	display: 'flex',
	// 	flexDirection: 'column',
	// 	alignItems: 'center',
	// 	justifyContent: 'flex-start',
	// 	marginTop: '150px',
	// },

	userContainer: {
		width: '1000px',
		height: '300px',
		padding: '16px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: 'white',
		margin: '100px 0 50px 0',
		borderRadius: '5px',
		boxShadow: '5px 4px 10px rgba(94,97,100,1)',
		'& div': {
			'& span': {
				fontWeight: 'bold',
			},
		},
	},

	left: {
		height: '75%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',		
		
	},

	middle: {
		// height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		
		'& div': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'space-around',
			// '& span': {
			// 	marginBottom: '20px'
			// },
			'& p': {
				margin: ' 15px 0',
			}
		},
	},

	right: {
		height: '100%',
		minWidth: '250px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		maxWidth: '300',
		'& p': {
			marginTop: '10px',
		},
	},

	userFooter: {
		width: 'calc(100% - 400px)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		'& div': {
			margin: '0 20px',
			padding: '8px 8px',
			backgroundColor: 'aliceblue',
			borderRadius: '5px',
			boxShadow: '5px 4px 10px rgba(94,97,100,1)',
			cursor: 'pointer',
		},
	},

	deletePopUpWrapper: {
		position: 'absolute',
		top: '50vh',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '600px',
		height: '200px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '50px',
		backgroundColor: 'RGB(146, 168, 209)',
		borderRadius: '20px',
		boxShadow: '5px 4px 10px rgba(94,97,100,1)',
		zIndex: '999',
	},

	buttonContainer: {
		width: '75%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& button': {
			padding: '8px 20px',
			border: 'none',
			borderRadius: '5px',
			fontSize: '18px',
		},
	},

	deleteYes: {
		backgroundColor: 'Crimson',
		color: 'white',
	},

	deleteNo: {
		backgroundColor: 'Green',
		color: 'white',
	},

	userPostsContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '50px',
	},

	singleUserPost: {},
});

export default UserProfileStyles;

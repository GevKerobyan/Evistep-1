import { createUseStyles } from 'react-jss';

const UserProfileStyles = createUseStyles({
	userContainer: {
		width: '1000px',
		height: '300px',
		padding: '16px',
		display: 'flex',
		padding: '20px',
		borderRadius: '5px',
		background: 'white',
		alignItems: 'center',
		margin: '100px 0 50px 0',
		justifyContent: 'space-between',
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
		alignItems: 'center',
		flexDirection: 'column',
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
			'& p': {
				margin: ' 10px 0',
			},
		},
	},

	right: {
		height: '100%',
		display: 'flex',
		maxWidth: '300',
		minWidth: '250px',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		'& p': {
			marginTop: '10px',
		},
	},

	userFooter: {
		display: 'flex',
		alignItems: 'center',
		width: 'calc(100% - 400px)',
		justifyContent: 'flex-end',
		'& div': {
			margin: '0 20px',
			cursor: 'pointer',
			padding: '8px 8px',
			borderRadius: '5px',
			backgroundColor: 'aliceblue',
			boxShadow: '5px 4px 10px rgba(94,97,100,1)',
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

	scrollTopButton: {
		position:'fixed',
		bottom: '100px',
		right: '100px',
		width: '60px',
		height: '60px',
		borderRadius: '30px',
		backgroundColor: 'crimson',
	},

	userPostsContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '50px',
	},
});

export default UserProfileStyles;

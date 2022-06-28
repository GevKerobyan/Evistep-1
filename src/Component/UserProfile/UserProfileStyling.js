import { createUseStyles } from 'react-jss';

const UserProfileStyles = createUseStyles({
	pageContainer: {
		padding: '50px 100px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	userContainer: {
		width: '1000px',
		height: '200px',
		padding: '16px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: 'white',
		marginBottom: '50px',
		borderRadius: '5px',
		boxShadow: '5px 4px 10px rgba(94,97,100,1)',
		'& div': {
			'& span': {
				fontWeight: 'bold',
			},
		},
	},

	left: {
		textAlign: 'left',
	},

	middle: {
		textAlign: 'left',

		'& div': {
			margin: ' 20px 0',
		},
	},

	middleTop: {},

	middleBottom: {},

	right: {
		height: '100%',
		textAlign: 'left',
		minWidth: '250px',
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
		top: '50%',
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
            fontSize: '18px'
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
});

export default UserProfileStyles;

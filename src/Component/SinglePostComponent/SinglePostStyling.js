import { createUseStyles } from 'react-jss';

const singlePostStyling = createUseStyles({
	pageWrapper: {
		width: '100vw',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		padding: '30px 100px',
	},

	singlePostWrapper: {
		position: 'relative',
		width: '600px',
		height: '350px',
		borderRadius: '5px',
		padding: '16px',
		margin: '30px 20px 20px 0',
		backgroundColor: 'rgba(146, 168, 209, 0.8)',
	},

	deleteAndEdit: {
		position: 'absolute',
		width: '10%',
		right: '16px',
		top: '16px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	
	editIcon: {
		width: '17px',
		height: '17px',
		fill: 'rgb(15,40,81)',
	},

	deletIcon: {
	
		fill: 'rgba(0,0,0,0.8)',
		fontSize: '20px',
		color: 'rgb(122,38,64)'

	},


	singlePostTop: {
		width: '200px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '10px ',
	},

	postOwnerImgBox: {
		height: '40px',
		width: '40px',
		overflow: 'hidden',
		borderRadius: '40px',
		'& img': {
			width: '40px',
			heigth: 'auto',
		},
	},

	singlePostBottom: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	BottomImgBox: {
		width: 'auto',
		minWidth: '200px',
		maxWidth: '250px',
		height: '200px',
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	postImg: {
		width: 'auto',
		height: '200px',
		overflow: 'hidden',
	},

	BottomPostInfo: {
		height: '175px',
		display: 'flex',
		marginLeft: '15px',
		// padding: '0 15px',
		flexDirection: 'column',
		justifyContent: 'space-between',
		textAlign: 'left',
	},

	postTags: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},

	postLikeContainer: {
		width: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	
	likeThumb: {
		height: '20px',
		width: '20px',
		fill: '#3C4CAD',
		cursor: 'pointer',
		'& svg': {
			width: '20px',
			heigth: '20px',
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


});

export default singlePostStyling;

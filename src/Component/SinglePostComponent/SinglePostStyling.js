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

	editIcon: {
		position: 'absolute',
		right: '16px',
		top: '16px',
		width: '25px',
		height: '25px',
		fill: '#3C4CAD',
	},

	singlePostTop: {
		width: '250px',
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
});

export default singlePostStyling;

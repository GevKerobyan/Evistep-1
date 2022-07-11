import { createUseStyles } from 'react-jss';

const OpenPostStylings = createUseStyles({
	openPostWrapper: {
		minHeight: '100%',
		display: 'flex',
		flexDirection: 'column',
		// justifyContent: 'stretch',
		alignItems: 'center',
	},

	postOwner: {
		// position: 'fixed',
		top: '5px',
		width: '400px',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		margin: '0 auto',
		backgroundColor: 'rgba(255,255,255,0.1)',
		padding: '5px 20px',
		borderRadius: '15px',
	},

	postOwnerPic: {
		width: '50px',
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& img': {
			width: '45px',
			height: '45px',
			borderRadius: '50%',
		},
	},

	postOwnerName: {
		width: '50%',
		textAlign: 'start',
		padding: '10px 0',
		borderBottom: '1px solid rgb(122,38,64)',
		'& span': {
			margin: '0 10px',
		},
	},

	postText: {
		maxWidth: '500px',
		width: '450px',
		margin: '0 auto',
		padding: '5px 0',
		textAlign: 'left'
	},

	postBody: {
		height: '100%',
		paddingTop: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',

	},

	postPic: {
		width: 'auto',
		maxWidth: '500px',
		height: 'auto',
		minHeight:'350px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '15px auto',
		borderRadius: '10px',
		overflow: 'hidden',
		'& img': {
			width: 'auto',
			maxWidth: '450px',
			height: 'auto',
			minHeight:'350px',
			borderRadius: '10px',
		},
	},

	postSpecs: {
		width: '100%',
		padding: '5px 50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '15px',
	},

	postTags: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},

	postSingleTag: {
		margin: '0 4px 4px 0',
		padding: '4px 8px',
		font: '12px',
		display: 'flex',
		whiteSpace: 'nowrap',
		borderRadius: '3px',
		color: 'white',
		backgroundColor: 'rgb(122,38,64)',
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

	commentSection: {
		height: '300px',
		minHeight: '100px',
		overflow: 'auto',
		padding: '15px',
		borderRadius: '10px',
	},

	commentInputWrapper: {
		width: '100%',
		minHeight: '40px',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: '15px',
		'& textarea': {
			width: '50%',
			height: '30px',
			minHeigth: '40px',
			borderRadius: '4px',
         margin: '0 20px',
			padding: '2px 7px',
		},
	},

   addCommentBtn: {

      border: '1px dashed blue',
      backgroundColor: 'rgba(250,250,250,1)',
      padding: '3px 18px',
      borderRadius: '4px',

   },

	openCommentsTrigger: {
		position: 'relative',
		height: '30px',
		width: '30px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	commentSVG: {
		height: '20px',
		width: '20px',
		fill: '#3C4CAD',
		cursor: 'pointer',
		'& svg': {
			width: '20px',
			heigth: '20px',
		},
	},

	commentTotal: {
		position: 'absolute',
		right: '-5px',
		top: '0',
		fontSize: '12px',
		color: 'white',
		fontWeight: 'bold',
		width: '15px',
		height: '15px',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(122,38,64)',
	},

	singleComment: {
		backgroundColor: 'rgb(255,255,255)',
		margin: '15px 0',
		padding: '10px',
		border: '0.5px solid rgb(122,38,64)',
		borderRadius: '4px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},

	commentOwnerField: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginBottom: '5px',
	},

	commentOwnerPic: {
		width: '30px',
		height: '30px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '15px',
		overflow: 'hidden',
	},

	commentOwnerPicImg: {
		width: '30px',
		height: '30px',
	},

	commentOwnerData: {
		width: '40%',
		borderBottom: '1px solid rgb(122,38,64)',
		padding: '10px',
		marginLeft: '15px',
		'& span': {
			margin: '5px',
		},
	},

	commentText: {
		margin: '5px 0',
		minWidth: '70%',
		padding: '5px 25px',
		backgroundColor: 'rgb(230,230,230)',
		borderRadius: '5px',
	},

	singleCommentFooter: {
		marginTop: '5px',
		width: '100%',
		textAlign: 'end',
		fontSize: '11px',
	},
});

export default OpenPostStylings;

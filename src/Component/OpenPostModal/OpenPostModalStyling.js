import { createUseStyles } from 'react-jss';

const OpenPostStylings = createUseStyles({
	openPostWrapper: {
      width: '600px',
      minWidth: '600px',
		height: 'auto',
      padding: '15px 50px',
      borderRadius: '10px',
		backgroundColor: 'white',
	},

   postOwner: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: '30px',

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
         borderRadius: '50%'
      }
   },

   postOwnerName: {
      width: '50%',
      textAlign: 'start',
      padding: '10px 0',
      borderBottom: '1px solid rgb(122,38,64)',
      '& span': {
         margin: '0 10px'
      }
   },

   postText: {
      
   },

	postPic: {
		width: 'auto',
		maxWidth: '600px',
		height: 'auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
      margin: '25px 0 10px 0',
      borderRadius: '10px',
      overflow: 'hidden',
		'& img': {
			width: 'auto',
			maxWidth: '500px',
			height: 'auto',
         borderRadius: '10px',
		},
	},

   postText: {
      backgroundColor: 'rgba(230,230,230, 0.7)',
      padding: '5px 15px',
      borderRadius: '5px',
   },

   postSpecs: {
      width: '80%',
      padding: '5px 50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '25px'
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
		minHeight: '100px',
		backgroundColor: 'rgb(230,230,230)',
		padding: '15px',
		borderRadius: '10px',
	},

	commentInputWrapper: {
      width: '100%',
      minHeigth: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
      '& textarea': {
         width: '70%',
         minHeigth: '50px', 
         borderRadius: '4px',
         padding: '2px 10px'
      }
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
      backgroundColor:'rgb(255,255,255)',
      margin: '15px 0',
      padding:'10px',
      border: '0.5px solid rgb(122,38,64)',
      borderRadius: '4px',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
   },

   commentOwnerField: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: '5px'
   },

   commentOwnerPic: {
      width: '30px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '15px',
      overflow: 'hidden'
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
      }
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
      fontSize: '11px'
   },
});

export default OpenPostStylings;

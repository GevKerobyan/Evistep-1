import { createUseStyles } from 'react-jss';

const postsListStyling = createUseStyles({

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

	//

	BottomImgBox: {
		height: '200px',
		width: '300px',
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& img': {
			width: '200px',
			heigth: 'auto',
		},
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

    singleTagWrapper: {
        position: 'relative',
    },

	postSingleTag: {
		// height: '40px',
		// width: '60px',
		backgroundColor: 'rgb(219,39,119)',
		margin: '0 4px 4px 0',
		padding: '4px 8px',
		font: '12px',
		display: 'flex',
		whiteSpace: 'nowrap',
		borderRadius: '3px',
	},

    postSingleTagPopUp: {

        position: 'absolute',
        top: '-20px',
        right: '0',
        width: '40px',
        heigth: '20px',
        backgroundColor: 'blue',
    },

	likeThumb: {
		height: '20px',
		width: '20px',
		fill: '#3C4CAD',
		'& svg': {
			width: '20px',
			heigth: '20px',
		},
	},

	postLikeContainer: {
		width: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	// userListNavBar: {
	// 	width: '100%',
	// 	height: '50px',
	// 	padding: '5px 200px',
	// 	position: 'fixed',
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	justifyContent: 'flex-end',
	// 	top: '5px',
	// 	left: '0',
	// 	backgroundColor: 'rgba(0,0,0,0.3)',
	// 	color: 'silver',
	// 	'& div': {
	// 		padding: '8px 10px',
	// 		backgroundColor: 'rgb(30,64,175)',
	// 		borderRadius: '5px',
	// 		color: 'white',
	// 		cursor: 'pointer',
	// 	},
	// },
});

export default postsListStyling;

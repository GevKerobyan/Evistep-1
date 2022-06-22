import { createUseStyles } from "react-jss";

const postsListStyling = createUseStyles({
    pageWrapper: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '50px 200px'
    },

    singlePostWrapper: {
        width: '600px',
        height: '350px',
        backgroundColor: 'white',
        borderRadius: '5px',
        padding:'16px',
        margin: '0 20px 20px 0'

    },

    singlePostTop: {
        width:'250px',
        // height: '100px',
        display: 'flex',
    },

    postOwnerImgBox: {
        height: '40px',
        width: '40px',
        overflow: 'hidden',
        borderRadius: '40px',
        '& img' : {
            width: '40px',
            heigth: 'auto',
        }
    },

    singlePostBottom: {
        display: 'flex',
    },

    // 

    BottomImgBox: {
        height: '250px',
        width: '300px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
       justifyContent: 'center',
        '& img' : {
            width: '250px',
            heigth: 'auto',
        }
    },

    BottomPostInfo: {
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'red',
        textAlign:'left'
    },

    postTags: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
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

    likeThumb: {
        height: '20px',
        width: '20px',
        fill: '#3C4CAD',
        '& svg' : {
            width: '20px',
            heigth: '20px',
        }
    },

    userListNavBar: {
        width: '100%',
        height: '50px',
        padding: '5px 200px',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: '5px',
        left: '0',
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: 'silver',
        '& div': {
            padding: '8px 10px',
            backgroundColor: 'rgb(30,64,175)',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer',
        }
    },

})

export default postsListStyling
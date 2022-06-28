import { useEffect, useRef, useState } from "react"
import { svgs } from "../../Assets/svgs"
import NavBar from "../../Component/NavBar/NavBar"
import NewPostModal from "../../Component/NewPostModal/NewPostModal"
import useUserContext from "../../Hooks/useUserContext"
import postListStyling from "./PostListStyling"


export const Postlists = () => {
    const postlistStyles = postListStyling()
    const [posts, setPosts] = useState([])
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [addModalOpen, setAddModalOpen] = useState(false)

    const postsRenderFlag = useRef(true);

    const { loggedUser, dispatch } = useUserContext()



    // Fetch Data

    useEffect(() => {
        if (postsRenderFlag.current) {
            const url = "https://dummyapi.io/data/v1/post?limit=10"
            const options = {
                method: "GET",
                headers: {
                    'app-id': "62b043e72dfd91bd6b56c58d",
                }
            }
            fetch(url, options)
                .then(response => response.json())
                .then(res => setPosts(...posts, res.data))
        }
        postsRenderFlag.current = false
    }, [posts])


    const handleEditClick = () => {
        setEditModalOpen(true);
    }

    const fixDate = (inputDate) => {
        const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        let outputDate;

        const day = inputDate.getDate()
        const month = monthArr[inputDate.getMonth()] 
        const year = inputDate.getFullYear()

        const hours = inputDate.getHours()
        const minutes = inputDate.getMinutes()
        const seconds = inputDate.getSeconds()


        outputDate = `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`
        
        return outputDate
    }

    return (
        <>
            <NavBar className={postlistStyles.userListNavBar}>
                <button className={postlistStyles.addUser} onClick={() => {
                    setAddModalOpen(true)
                }}>Add Post</button>
            </NavBar>
            <div className={postlistStyles.pageWrapper}>
                {addModalOpen
                    ? (<NewPostModal setAddModalOpen={setAddModalOpen} action ='create' />)
                    : ''}
                {/* {editModalOpen
                ? <NewPostModal setAddModalOpen={setAddModalOpen} action ='edit'/>} */}
                {posts.map((post, index) => {
                    let date = fixDate(new Date(post.publishDate));
                    console.dir(date)
                    return (
                        <div className={postlistStyles.singlePostWrapper} key={post.id + index}>
                            {post.owner.id === loggedUser.userInfo.id
                                ? <div className={postlistStyles.editIcon} onClick={(e) => handleEditClick(e)}>{svgs.edit}</div>
                                : <div className={postlistStyles.editIcon} />
                            }

                            <div className={postlistStyles.singlePostTop}>
                                <div className={postlistStyles.postOwnerImgBox}>
                                    <img src={post.owner.picture} alt='' />
                                </div>
                                <div className={postlistStyles.postOwnerInfo}>
                                    <p>{post.owner.title} {post.owner.firstName} {post.owner.lastName}</p>
                                    <p>{}</p>
                                </div>
                            </div>
                            <div className={postlistStyles.singlePostBottom}>
                                <div className={postlistStyles.BottomImgBox}>
                                    <img src={post.image} alt='' />
                                </div>
                                <div className={postlistStyles.BottomPostInfo}>
                                    <p>{date}</p>
                                    {editModalOpen
                                        ? <input type='text' value={post.text} className={postlistStyles.singlePostBottom} />
                                        : <p>{post.text}</p>
                                    }
                                    <div className={postlistStyles.postTags}>
                                        {post.tags.map((tag, index) => {
                                            return (
                                                <div className={postlistStyles.postSingleTag} key={index}>{tag}</div>
                                            )
                                        })}
                                    </div>
                                    <div className={postlistStyles.postLikeContainer}>
                                        <span className={postlistStyles.likeThumb}>{svgs.thumbUp}</span>
                                        <span className={postlistStyles.likeCount}>{post.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
import { useEffect, useRef, useState } from "react"
import { svgs } from "../../Assets/svgs"
import { ReactDOM } from "react-dom"
import NewPostModal from "../../Component/NewPostModal/NewPostModal"
import postListStyling from "./PostListStyling"


export const Postlists = () => {
    const postlistStyles = postListStyling()
    const [posts, setPosts] = useState([])
    const [editModeOn, setEditModeOn] = useState(false)
    const [addModalOpen, setAddModalOpen] = useState(false)

    const postsRenderFlag = useRef(true);


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

    useEffect(() => {
        console.log(posts)
    }, [posts])

    const handleEditClick = () => {
        setEditModeOn(prev => !prev);
    }

    return (
        <div className={postlistStyles.pageWrapper}>
            <div className={postlistStyles.userListNavBar}>
                <div className={postlistStyles.addUser} onClick={() => {
                    setAddModalOpen(true)
                }}>Add Post</div>
            </div>
            {addModalOpen
                ? (<NewPostModal setAddModalOpen={setAddModalOpen}/>)
                : ''}
            {posts.map((post, index) => {
                // console.log(post.id)
                return (
                    <div className={postlistStyles.singlePostWrapper} key={post.id+index}>
                       <div className={postlistStyles.editIcon} onClick={(e)=>handleEditClick(e)}>{svgs.edit}</div>
                       
                        <div className={postlistStyles.singlePostTop}>
                            <div className={postlistStyles.postOwnerImgBox}>
                                <img src={post.owner.picture} alt='' />
                            </div>
                            <div className={postlistStyles.postOwnerInfo}>
                                <p>{post.owner.title} {post.owner.firstName} {post.owner.lastName}</p>
                                <p>{post.publishDate}</p>
                            </div>
                        </div>
                        <div className={postlistStyles.singlePostBottom}>
                            <div className={postlistStyles.BottomImgBox}>
                                <img src={post.image} alt='' />
                            </div>
                            <div className={postlistStyles.BottomPostInfo}>
                                <p>{post.publishDate}</p>
                                {editModeOn
                                ? <input type='text' value = {post.text} className={postlistStyles.singlePostBottom} />
                                :<p>{post.text}</p>
                                }
                                <div className={postlistStyles.postTags}>
                                    {post.tags.map(tag => {
                                        return (
                                            <div className={postlistStyles.postSingleTag}>{tag}</div>
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
    )
}
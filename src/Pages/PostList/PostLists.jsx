import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../../Component/NavBar/NavBar"
import NewPostModal from "../../Component/NewPostModal/NewPostModal"
import SinglePost from "../../Component/SinglePostComponent/SinglePost"
import { Button } from "../../Component/styled/Buttons.styled"
import { PageContainer } from "../../Component/styled/PageContainer.styled"
import fixDate from "../../Helpers/dateFix"
import useUserContext from "../../Hooks/useUserContext"
import postListStyling from "./PostListStyling"


export const Postlists = ({ searchTag }) => {
    const postlistStyles = postListStyling()
    const [posts, setPosts] = useState([])
    const [addModalOpen, setAddModalOpen] = useState(false)

    const postsRenderFlag = useRef(true);

    const { postId } = useParams()

    const { loggedUser, dispatch } = useUserContext()
    const [tagSearchflag, setTagSearchFlag] = useState(false)
    const [likedUsers, setLiked] = useState(true)




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
        // console.log('consoling: posts :::', posts)
    }, [posts])

    

    // const handleThumbUp = (index) => {
    //         setPosts(
    //             posts.map((item, ind) => {
    //                 return ((ind === index)
    //                 ? (posts[ind].likedUsers?.includes(loggedUser.userInfo.id)
    //                 ? {...posts[ind], likes: posts[ind].likes-1, likedUsers: [posts[ind].likedUsers.filter(user=>user === loggedUser.userInfo.id)]}
                   
    //                 : {...posts[ind], likes: posts[ind].likes+1, likedUsers: [...posts[ind].likedUsers, loggedUser.userInfo.id]})
    //                 : item)
    //             })
    //         )
    //         setLiked(false)
       
    //         // setPosts(
    //         //     posts.map((item, ind) => {
    //         //         return ((ind === index)
                    
    //         //         ? {...posts[ind], likes: posts[ind].likes+1}
    //         //         : item)
    //         //     })
    //         // )
    //         setLiked(true)
    //     }

    const handleTagClick = () => {
        setTagSearchFlag(true)
    }

    return (
        <>
            <NavBar className={postlistStyles.userListNavBar}>
                <span onClick={() => {
                    setAddModalOpen(true)
                }}>Add Post</span>
            </NavBar>
            <PageContainer>
                {addModalOpen
                    ? (<NewPostModal setAddModalOpen={setAddModalOpen} action='create' />)
                    : ''}
                {posts.map((post, index) => {
                    let date = fixDate(new Date(post.publishDate));
                    return (
                        <SinglePost
                            key={post.id+index}
                            post={post}
                            index={index}
                            date={date}/>
                    )
                })}
            </PageContainer>
        </>
    )
}
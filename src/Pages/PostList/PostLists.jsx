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
    const [liked, setLiked] = useState(true)




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
        // console.log('consoling: posts :::')
    }, [tagSearchflag])


    const handleThumbUp = (index) => {
        if (liked) {
            setPosts([
                ...posts, posts[index] = { ...posts[index], likes: posts[index].likes - 1 }
            ])
            console.log('consoling: posts[index] 1 :::', posts[index].likes)
            setLiked(false)
        } else {
            console.log('consoling: posts[index] 2 :::', posts[index].likes)
            setPosts([
                ...posts, posts[index] = { ...posts[index], likes: posts[index].likes + 1 }
            ])
            setLiked(true)
        }
    }

    const handleTagClick = () => {
        setTagSearchFlag(true)
    }

    return (
        <>
            <NavBar className={postlistStyles.userListNavBar}>
                <Button onClick={() => {
                    setAddModalOpen(true)
                }}>Add Post</Button>
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
                            handleThumbUp={handleThumbUp}
                            post={post}
                            liked={liked}
                            setLiked={setLiked}
                            index={index}
                            date={date}
                            handleTagClick={handleTagClick} />
                    )
                })}
            </PageContainer>
        </>
    )
}
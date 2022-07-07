import axios from "axios"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../../Component/NavBar/NavBar"
import NewPostModal from "../../Component/NewPostModal/NewPostModal"
import Pagination from "../../Component/Pagination"
import SinglePost from "../../Component/SinglePostComponent/SinglePost"
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

    // PAGINATION INFO
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPae] = useState(10)
    let numOfPages = useCallback((Math.ceil(total/postsPerPage)),[total, postsPerPage])
    console.log('consoling: numOfPages in parent:::', numOfPages )

    // Fetch Data

    useEffect(() => {
        if (postsRenderFlag.current) {
            // setLoading(true)
            const url = `https://dummyapi.io/data/v1/post?page=${currentPage}&limit=${postsPerPage}`

            const headers = {
                'app-id': "62b043e72dfd91bd6b56c58d",
            }

            axios.get(url, { headers })
                .then(res => {
                    setTotal(res.data.total)
                    setPosts(...posts, res.data.data)
                    setLoading(false)
                })
        }
        postsRenderFlag.current = false
    }, [currentPage, postsPerPage])

    useEffect(() => {
        // console.log('consoling: posts :::', posts)
    }, [posts])

    return (
        <>
            <NavBar className={postlistStyles.userListNavBar}>
                <span onClick={() => {
                    setAddModalOpen(true)
                }}>Add Post</span>
            </NavBar>
            <PageContainer>
                {addModalOpen
                    ? (<NewPostModal
                        setAddModalOpen={setAddModalOpen}
                        action='create'
                        posts={posts}
                        setPosts={setPosts} />)
                    : ''}
                {loading
                    ? 'Loading...'
                    : posts.map((post, index) => {
                        let date = fixDate(new Date(post.publishDate));
                        return (
                            <SinglePost
                                key={post.id + index}
                                post={post}
                                index={index}
                                date={date} />
                        )
                    })}
                <Pagination
                    numOfPages={numOfPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </PageContainer>
        </>
    )
}
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import NavBar from "../../Component/NavBar/NavBar"
import NewPostModal from "../../Component/NewPostModal/NewPostModal"
import Pagination from "../../Component/Pagination"
import SinglePost from "../../Component/SinglePostComponent/SinglePost"
import { PageContainer } from "../../Component/styled/PageContainer.styled"
import fixDate from "../../Helpers/dateFix"
import postListStyling from "./PostListStyling"


export const Postlists = () => {
    const postlistStyles = postListStyling()
    const [posts, setPosts] = useState([])
    const [addModalOpen, setAddModalOpen] = useState(false)

    // PAGINATION INFO

const [pageParams, setPageParams]=useSearchParams();
console.log('pageParams : ', pageParams)



    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPae] = useState(10)
    let numOfPages = useCallback((Math.ceil(total / postsPerPage)-1), [total, postsPerPage])
    useEffect(()=> {setPageParams({page: currentPage})},[currentPage])
    
    // Fetch Data
    useEffect(() => {
        const url = `https://dummyapi.io/data/v1/post?page=${currentPage}&limit=${postsPerPage}`
        const headers = {
            'app-id': "62b043e72dfd91bd6b56c58d",
        }
        axios.get(url, { headers })
            .then(res => {
                setTotal(res.data.total)
                setPosts(res.data.data)
                setLoading(false)
            })
    }, [currentPage, postsPerPage])

    return (
        <>
            <NavBar className={postlistStyles.userListNavBar}>
                <span onClick={() => {
                    setAddModalOpen(!addModalOpen)
                }}>Add Post</span>
            </NavBar>
            <PageContainer>
                {addModalOpen
                    ? (<NewPostModal
                        setAddModalOpen={setAddModalOpen} 
                        posts={posts}
                       />)
                    : null}
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
              
                    : <Pagination
                        numOfPages={numOfPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        loading={loading} />
            </PageContainer>
        </>
    )
}
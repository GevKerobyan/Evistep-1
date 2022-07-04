import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import SinglePost from "../../Component/SinglePostComponent/SinglePost";
import { SingleTagPost } from "../../Component/SinglePostComponent/SingleTagPost";
import { PageContainer } from "../../Component/styled/PageContainer.styled";
import { PostContainer } from "../../Component/styled/PostContainer.styled";

export const TaggedPosts = () => {

  const [taggedPosts, setTaggedPosts] = useState([])
  const location = useLocation()
  // const { searchTag } = location.state.searchTag
  const match = useParams()



  useEffect(() => {
    console.log('tPosts : ', ...taggedPosts)
  }, [match])

  const postsRenderFlag = useRef(true);

  useEffect(() => {
    if (postsRenderFlag.current) {
      const url = `https://dummyapi.io/data/v1/tag/${match.tag}/post?limit=10`
      const options = {
        method: "GET",
        headers: {
          'app-id': "62b043e72dfd91bd6b56c58d",
        }
      }
      fetch(url, options)
        .then(response => response.json())
        .then(res => setTaggedPosts(...taggedPosts, res.data))
    }
    postsRenderFlag.current = false
  }, [match])


  return (
    <>
      <NavBar />
      <PageContainer>
        {taggedPosts.map(post => {
          return (
            <SinglePost key={post.id} post={post} />
          )
        })}
      </PageContainer>
    </>
  )
}
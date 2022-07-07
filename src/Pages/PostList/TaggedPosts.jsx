import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import SinglePost from "../../Component/SinglePostComponent/SinglePost";
import { PageContainer } from "../../Component/styled/PageContainer.styled";

export const TaggedPosts = () => {

  const [taggedPosts, setTaggedPosts] = useState([])
  const location = useLocation()
  const match = useParams()

  const postsRenderFlag = useRef(true);

  useEffect(() => {
      console.log(match.tag, 'useEffect');
      const url = `https://dummyapi.io/data/v1/tag/${match.tag}/post?limit=10`
      const options = {
        method: "GET",
        headers: {
          'app-id': "62b043e72dfd91bd6b56c58d",
        }
      }
      fetch(url, options)
        .then(response => response.json())
        .then(res => setTaggedPosts(res.data))
    postsRenderFlag.current = false
  }, [match.tag])

  if (!taggedPosts) return null
console.log(taggedPosts, 'taggedPoststaggedPoststaggedPosts');
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
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SinglePost from "../../Component/SinglePostComponent/SinglePost";
import SingleTagPost from "../../Component/SinglePostComponent/SingleTagPost";
import { PostContainer } from "../../Component/styled/PostContainer.styled";
import taggedPostsStyling from "./TaggedPostsStylings";

function TaggedPosts() {

    const [taggedPosts, setTaggedPosts] = useState([])
    const location = useLocation()
    // const { searchTag } = location.state.searchTag
    const match = useParams()



    useEffect(()=> {
console.log('tPosts : ',...taggedPosts)
    },[taggedPosts])

  const taggedPostStyles = taggedPostsStyling()
  const postsRenderFlag = useRef(true);

  useEffect(() => {
    if (postsRenderFlag.current) {
      const url =   `https://dummyapi.io/data/v1/tag/${match.tag}/post?limit=10`
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
  }, [])

  
  return (
    <div className={taggedPostStyles.pageWrapper}>
{taggedPosts.map(post=> {
  return (<PostContainer>
    <SingleTagPost post={post}/>
  </PostContainer>)
})}
    </div>
  )
}

export default TaggedPosts
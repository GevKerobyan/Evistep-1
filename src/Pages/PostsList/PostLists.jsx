import { useEffect, useState } from "react"
import { svgs } from "../../Assets/svgs"
import postsListStyling from "./PostListStyling"


export const Postslists = () => {
    const postslistStyles = postsListStyling()
    const [posts, setPosts] = useState([])

    // Fetch Data

    const url = "https://dummyapi.io/data/v1/post?limit=10"
    const options = {
      method: "GET",
      headers: {
        'app-id':"62b043e72dfd91bd6b56c58d",
      }}

    useEffect(()=> {
      fetch(url, options)
      .then(response => response.json())
      .then(res => setPosts(...posts, res.data))
    },[])

    useEffect(()=> {
    //   console.log(posts)
    },[posts])

    return(
        <div className={postslistStyles.pageWrapper}>
            {posts.map((post)=> {
                return (
                    <div className={postslistStyles.singlePostWrapper} key={post.owner.id}>
                        <div className={postslistStyles.singlePostTop}>
                            <div className={postslistStyles.postOwnerImgBox}>
                                <img src={post.owner.picture} alt='' />
                            </div>
                            <div className={postslistStyles.postOwnerInfo}>
                                <p>{post.owner.title} {post.owner.firstName} {post.owner.lastName}</p>
                                <p>{post.publishDate}</p>
                            </div>
                        </div>
                        <div className={postslistStyles.singlePostBottom}>
                            <div className={postslistStyles.BottomImgBox}>
                                <img src={post.image} alt='' />
                            </div>
                            <div className={postslistStyles.BottomPostInfo}>
                                <p>{post.publishDate}</p>
                                <p>{post.text}</p>
                                <div className={postslistStyles.postTags}>
                                    {post.tags.map(tag=> {
                                        return (
                                            <div className={postslistStyles.postSingleTag}>{tag}</div>
                                        )
                                    })}
                                </div>
                                <div className={postslistStyles.postLikeContainer}>
                                    <span className={postslistStyles.likeThumb}>{svgs.thumbUp}</span>
                                    <span className={postslistStyles.likeCount}>{post.likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )                
            })}
        </div>
    )
    
}
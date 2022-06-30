import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { svgs } from '../../Assets/svgs'
import useUserContext from '../../Hooks/useUserContext'
import { PostContainer } from '../styled/PostContainer.styled'
import singlePostStyling from './SinglePostStyling'

function SinglePost({ handleThumbUp, post, liked, setLiked, index, date, handleTagClick}) {
   const postStyles = singlePostStyling()

   const { loggedUser, dispatch } = useUserContext()

   const [editModalOpen, setEditModalOpen] = useState(false)

   const [searchTag, setSearchTag] = useState('')

   const handleEditClick = () => {
      setEditModalOpen(true);
  }

  return (
   <PostContainer key={post.id + index}>

   {loggedUser
       ? post.owner.id === loggedUser.userInfo.id
           ? <div className={postStyles.editIcon} onClick={(e) => handleEditClick(e)}>{svgs.edit}</div>
           : <div className={postStyles.editIcon} />
       : null
   }

   <Link to={`/profile/${post.owner.id}`} className={postStyles.singlePostTop}>
       <div className={postStyles.postOwnerImgBox}>
           <img src={post.owner.picture} alt='' />
       </div>
       <div className={postStyles.postOwnerInfo}>
           <p>{post.owner.title} {post.owner.firstName} {post.owner.lastName}</p>
           <p>{date}</p>
       </div>
   </Link>
   <div className={postStyles.singlePostBottom}>
       <div className={postStyles.BottomImgBox}>
           <img src={post.image} alt='' className={postStyles.postImg}/>
       </div>
       <div className={postStyles.BottomPostInfo}>
           <p>{date}</p>
           {editModalOpen
               ? <input type='text' value={post.text} className={postStyles.singlePostBottom} />
               : <p>{post.text}</p>
           }
           <div className={postStyles.postTags}>
               {post.tags.map((tag, index) => {
                   return (
                       <Link to={`/taggedposts/${tag}`} className={postStyles.postSingleTag} key={post.id+index} onClick={e=>{}}>{tag}</Link>
                   )
               })}
           </div>
           <div className={postStyles.postLikeContainer}>
               <span className={postStyles.likeThumb} onClick={() => handleThumbUp(index)}>{svgs.thumbUp}</span>
               <span className={postStyles.likeCount}>{post.likes}</span>
           </div>
       </div>
   </div>
</PostContainer>
  )
}

export default SinglePost
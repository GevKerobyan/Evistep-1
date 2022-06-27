import React from 'react'
import singlePostStyling from './SinglePostContainerStyling'

function SinglePostContainer({data}) {
   const singlePostStyles = singlePostStyling()
   return (
      <div className={singlePostStyles.singlePostWrapper} >
         <div className={singlePostStyles.editIcon} onClick={(e) => handleEditClick(e)}>{svgs.edit}</div>

         <div className={singlePostStyles.singlePostTop}>
            <div className={singlePostStyles.postOwnerImgBox}>
               <img src='' alt='' />
            </div>
            <div className={singlePostStyles.postOwnerInfo}>
               {/* <p>{data.owner.title} {post.owner.firstName} {post.owner.lastName}</p> */}
               <p>{post.publishDate}</p>
            </div>
         </div>
         <div className={singlePostStyles.singlePostBottom}>
            <div className={singlePostStyles.BottomImgBox}>
               <img src={post.image} alt='' />
            </div>
            <div className={singlePostStyles.BottomPostInfo}>
               <p>{post.publishDate}</p>
               {editModeOn
                  ? <input type='text' value={post.text} className={singlePostStyles.singlePostBottom} />
                  : <p>{post.text}</p>
               }
               <div className={singlePostStyles.postTags}>
                  {post.tags.map((tag, index) => {
                     return (
                        <div className={singlePostStyles.postSingleTag} key={index}>{tag}</div>
                     )
                  })}
               </div>
               <div className={singlePostStyles.postLikeContainer}>
                  <span className={singlePostStyles.likeThumb}>{svgs.thumbUp}</span>
                  <span className={singlePostStyles.likeCount}>{post.likes}</span>
               </div>
            </div>
         </div>
      </div>)
}

export default SinglePostContainer
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { svgs } from "../../Assets/svgs"
import fixDate from "../../Helpers/dateFix"
import useUserContext from "../../Hooks/useUserContext"
import Modal from "../Modal/Modal"
import OpenPostStylings from "./OpenPostModalStyling"



function OpenPostModal({ post, setOpenPost }) {
   const openPostStyles = OpenPostStylings()
   const { loggedUser, dispatch } = useUserContext()

   const [comments, setComments] = useState([])

   const [openComments, setOpenComments] = useState(false)


   // AXIOS get post comments
   useEffect(() => {

      const url = `https://dummyapi.io/data/v1/post/${post.id}/comment`;
      const headers = {
         'app-id': "62b1dfc56fa280809ad74846",
         "Access-Control-Allow-Origin": "*"
      }

      axios.get(url, { headers })
         .then(res => setComments(res.data))
         .catch(er => { alert(er) })
   }, [])

   useEffect(() => {
      console.log('comments total', comments)

   }, [comments])


   return (
      <Modal isOpen openPost>
         <div className={openPostStyles.openPostWrapper}>
            <div className={openPostStyles.closeModalButton} onClick={() => {
               setOpenPost(false)
            }}>X</div>
            <div className={openPostStyles.postOwner}>
               <div className={openPostStyles.postOwnerPic}>
                  <img src={post.owner.picture} className={openPostStyles.postOwnerPicImg}></img>
               </div>
               <div className={openPostStyles.postOwnerName}>
                  <span>{post.owner.firstName}</span>
                  <span>{post.owner.lastName}</span>
               </div >
            </div >

            <div className={openPostStyles.postBody}>
               <div className={openPostStyles.postText}>
                  <p>{post.text}</p>
               </div>
               <div className={openPostStyles.postPic}>
                  <img src={post.image} className={openPostStyles.postPicImg}></img>
               </div>
               <div className={openPostStyles.postSpecs}>
               <div className={openPostStyles.postLikeContainer}>
                     <span className={openPostStyles.likeThumb} >{svgs.thumbUp}</span>
                     <span className={openPostStyles.likeCount}>{post.likes}</span>
                  </div>
                  <div className={openPostStyles.postTags}>
                     {post.tags.map((tag, index) => {
                        return (
                           <Link to={`/taggedposts/${tag}`} className={openPostStyles.postSingleTag} key={post.id + index} onClick={e => { }}>{tag}</Link>
                        )
                     })}
                  </div>
                 
                  <div className={openPostStyles.openCommentsTrigger} onClick={() => { setOpenComments(!openComments) }}>
                     <span className={openPostStyles.commentSVG} >{svgs.comment}
                        <span className={openPostStyles.commentTotal}>{comments.total}</span>
                     </span>
                  </div>
               </div>
            </div>
            <div className={openPostStyles.singlePostFooter}></div>
            {openComments
               ? <div className={openPostStyles.commentSection}>
                  <div className={openPostStyles.commentInputWrapper}>
                     <label htmlFor='commentInput'>Comment the post</label>
                     <textarea id='commentInput' />
                  </div>
                  <div className={openPostStyles.presentComments}>
                     {comments.data.map(comment => {
                        return (
                           // console.log('consoling: comment :::', comment )
                           <div className={openPostStyles.singleComment} key={comment.id}>
                              <div className={openPostStyles.commentOwnerField}>
                                 <div className={openPostStyles.commentOwnerPic}>
                                    <img src={comment.owner.picture} className={openPostStyles.commentOwnerPicImg} />
                                 </div>
                                 <div className={openPostStyles.commentOwnerData}>
                                    <span className={openPostStyles.commentOwnerName}>{comment.owner.firstName}</span>
                                    <span className={openPostStyles.commentOwnerLastName}>{comment.owner.lastName}</span>
                                 </div>
                              </div>
                              <div className={openPostStyles.commentText}>{comment.message}</div>
                              <div className={openPostStyles.singleCommentFooter}>{fixDate(new Date(comment.publishDate))}</div>
                              
                           </div>
                        )
                     })}
                  </div>


               </div>
               : null}
         </div>
      </Modal>
   )
}

export default OpenPostModal
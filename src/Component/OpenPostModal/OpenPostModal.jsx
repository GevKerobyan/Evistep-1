import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { svgs } from "../../Assets/svgs"
import fixDate from "../../Helpers/dateFix"
import useUserContext from "../../Hooks/useUserContext"
import Modal from "react-modal"
import Tag from "../Tag/Tag"
import OpenPostStylings from "./OpenPostModalStyling"
import styled from "styled-components"

const CloseBtn = styled.button`
	position: absolute;
	height: 60px;
	width: 60px;
	right: 0;
	top: 0;
	border: none;
	border-bottom-left-radius: 100%;
	background: #3C4CAD;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Xspan = styled.span`
	height: 30px;
	width: 30px;
	font-size: 25px;
	color: white;
	transform: translate(25%, -25%);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function OpenPostModal({ post, setOpenPost }) {
   const openPostStyles = OpenPostStylings()

   const { loggedUser, dispatch } = useUserContext()
   const [comments, setComments] = useState([])
   const [newComment, setNewComment] = useState('')
   const [openComments, setOpenComments] = useState(false)

   // AXIOS get post comments
   // useEffect(() => {
      const url = `https://dummyapi.io/data/v1/post/${post.id}/comment`;
      const headers = {
         'app-id': "62b1dfc56fa280809ad74846",
         "Access-Control-Allow-Origin": "*"
      }
      axios.get(url, { headers })
         .then(res => setComments(res.data))
         .catch(er => { alert(er) })
   // }, [newComment])

   const toggleComments = e => {
      e.stopPropagation()
      setOpenComments(!openComments)
   }

   // AXIOS Post new comment
   const handleAddComment = e => {
      e.stopPropagation()
      const url = `https://dummyapi.io/data/v1/comment/create`
      const headers = {
         'app-id': "62b1dfc56fa280809ad74846",
         "Access-Control-Allow-Origin": "*"
      }
      const body = {
         'message': newComment,
         'owner': loggedUser.userInfo.id,
         'post': post.id,
      }
      axios.post(url, body, { headers })
         .then(res => setComments(res.data))
         .then(setNewComment(''))
         .catch(er => console.log(er))
   }

   return (
      <Modal isOpen
         onRequestClose={() => setOpenPost(false)}
         style={{
            overlay: {
               position: 'fixed',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               zIndex: 1000,
               backgroundColor: 'rgba(0,0,0, 0.85)',

            },
            content: {
               position: 'absolute',
               minHeight: '75%',
               width: '650px',
               top: '40px',
               left: '40px',
               right: '40px',
               bottom: '40px',
               border: '1px solid #ccc',
               background: '#fff',
               overflow: 'auto',
               WebkitOverflowScrolling: 'touch',
               borderRadius: '10px',
               outline: 'none',
               padding: '20px 40px',
               margin: '0 auto',
               marginTop: '50vh',
               transform: 'translateY(-60%)',
               boxSizing: 'content-box',
               border: 'none',
            },
         }}
      >
         <div className={openPostStyles.openPostWrapper}>
            <CloseBtn onClick={() => setOpenPost(false)}>
               <Xspan>X</Xspan>
            </CloseBtn>
            <Link to={`/profile/${post.owner.id}`} className={openPostStyles.postOwner}>
               <div className={openPostStyles.postOwnerPic}>
                  <img src={post.owner.picture} className={openPostStyles.postOwnerPicImg}></img>
               </div>
               <div className={openPostStyles.postOwnerName}>
                  <span>{post.owner.firstName}</span>
                  <span>{post.owner.lastName}</span>
               </div >
            </Link >

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
                           <Tag key={[post.id + index]} tag={tag} />
                        )
                     })}
                  </div>

                  <div className={openPostStyles.openCommentsTrigger} onClick={e => toggleComments(e)}>
                     <span className={openPostStyles.commentSVG}>{svgs.comment}
                        <span className={openPostStyles.commentTotal}>{comments.total}</span>
                     </span>
                  </div>
               </div>
            </div>
            <div className={openPostStyles.singlePostFooter}></div>
            {openComments
               ? <div className={openPostStyles.commentSection}>
                  <div className={openPostStyles.commentInputWrapper}>
                     <p>Comment the post</p>
                     <textarea id='commentInput' onClick={e => { e.stopPropagation() }} value={newComment} onChange={e => setNewComment(e.target.value)} />
                     {newComment ? <button onClick={e => handleAddComment(e)} className={openPostStyles.addCommentBtn}>add</button> : ''}
                  </div>
                  <div className={openPostStyles.presentComments}>
                     {comments.data?.map(comment => {
                        return (
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
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { svgs } from '../../Assets/svgs'
import useUserContext from '../../Hooks/useUserContext'
import Modal from '../Modal/Modal'
import OpenPostModal from '../OpenPostModal/OpenPostModal'
import { PostContainer } from '../styled/PostContainer.styled'
import Tag from '../Tag/Tag'
import singlePostStyling from './SinglePostStyling'

function SinglePost({ post, index, date }) {
    const postStyles = singlePostStyling()

    const { loggedUser, dispatch } = useUserContext()

    const [editModalOpen, setEditModalOpen] = useState(false)
    const [openPost, setOpenPost] = useState(false)

    const [deletePostFlag, setDeletePostFlag] = useState(false)

    const handleEditClick = e => {
        e.stopPropagation()
        setEditModalOpen(true);
        console.log('edit')
    }

    const handleDeleteNo = e => {
        e.stopPropagation()
        setDeletePostFlag(false)
    }

    const handleDeleteClick = e => {
        e.stopPropagation()
        setDeletePostFlag(true)
        console.log('delete')
    }

    const handlePostDelete = e => {
        e.stopPropagation()
        const url = `https://dummyapi.io/data/v1/post/${post.id}`
        const headers = {
            'app-id': "62b043e72dfd91bd6b56c58d",
            'Access-Control-Allow-Origin': "*"
        }
        axios.delete(url, { headers })
            .then(res => console.log('res : ', res))
    }

    const handleOpenPost = e => {
        setOpenPost(!openPost)

    }

    useEffect(() => {
        console.log('consoling: deletePostFlag :::', deletePostFlag)
    }, [deletePostFlag])


    return (
        <PostContainer key={post.id + index} onClick={e => handleOpenPost(e)}>

            {/* delete section */}
            
            {deletePostFlag
                ? <>
                    <div className={postStyles.deletePopUpWrapper}>
                        <h2 className={postStyles.deletePopUpText}>Are you sure you want to delete this post?</h2>
                        <div className={postStyles.buttonContainer}>
                            <button className={postStyles.deleteYes} onClick={e => handlePostDelete(e)}>Yes</button>
                            <button className={postStyles.deleteNo} onClick={e => handleDeleteNo(e)}>No</button>
                        </div>
                    </div>
                </>
                : null}
            
            {/* showing edit delete buttons  */}

            {loggedUser
                ? post.owner.id === loggedUser.userInfo.id
                    ? <div className={postStyles.deleteAndEdit}>
                        <div className={postStyles.editIcon} onClick={(e) => handleEditClick(e)}>{svgs.edit}</div>
                        <div className={postStyles.deletIcon} onClick={(e) => handleDeleteClick(e)}>X</div>
                    </div>
                    : <div className={postStyles.editIcon} />
                : null
            }
            {openPost
                ? (<OpenPostModal post={post} handleOpenPost={handleOpenPost} />)
                : ''}
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
                    <img src={post.image} alt='' className={postStyles.postImg} />
                </div>
                <div className={postStyles.BottomPostInfo}>
                    <p>{post.text}</p>
                    <p>{date}</p>
                    <div className={postStyles.postTags}>
                        {post.tags.map((tag, index) => {
                            return (
                                <Tag
                                    key={[post.id + index]}
                                    tag={tag}
                                    postId={post.id}
                                />
                            )
                        })}
                    </div>
                    <div className={postStyles.postLikeContainer}>
                        <span className={postStyles.likeThumb} >{svgs.thumbUp}</span>
                        <span className={postStyles.likeCount}>{post.likes}</span>
                    </div>
                </div>
            </div>
        </PostContainer>
    )
}

export default SinglePost
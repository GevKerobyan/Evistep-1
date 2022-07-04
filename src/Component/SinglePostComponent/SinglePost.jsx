import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { svgs } from '../../Assets/svgs'
import useUserContext from '../../Hooks/useUserContext'
import OpenPostModal from '../OpenPostModal/OpenPostModal'
import { PostContainer } from '../styled/PostContainer.styled'
import Tag from '../Tag/Tag'
import singlePostStyling from './SinglePostStyling'

function SinglePost({ post, index, date }) {
    const postStyles = singlePostStyling()

    const { loggedUser, dispatch } = useUserContext()

    const [editModalOpen, setEditModalOpen] = useState(false)
    const [openPost, setOpenPost] = useState(false)

    const [searchTag, setSearchTag] = useState('')

    const handleEditClick = () => {
        setEditModalOpen(true);
    }

    const handleOpenPost = () => {
        setOpenPost(!openPost)
    }

    useEffect(() => {
        console.log('consoling: openPost :::', openPost)
    }, [openPost])


    return (
        <PostContainer key={post.id + index} onClick={handleOpenPost}>
            {loggedUser
                ? post.owner.id === loggedUser.userInfo.id
                    ? <div className={postStyles.editIcon} onClick={(e) => handleEditClick(e)}>{svgs.edit}</div>
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
                                <Tag key={[post.id + index]} tag={tag} />
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
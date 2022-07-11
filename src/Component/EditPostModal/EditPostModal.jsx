import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import useUserContext from "../../Hooks/useUserContext";
import { postModalStyling } from "../NewPostModal/newPostModalStyling";

function EditPostModal({ post, setEditModalOpen }) {
    const [singleTag, setSingleTag] = useState('')
    const { loggedUser, dispatch } = useUserContext()
    const [editedPost, setEditedPost] = useState({post})

    // INPUT CHANGE HANDLERS
    const handleImageChange = e => {
        setEditedPost({ ...editedPost, image: e.target.files[0] })
    }
    const handleTagChange = e => {
        setSingleTag(e.target.value)
    }
    const handleTagAdd = (e) => {
        e.preventDefault()
        if (singleTag) {
            setEditedPost({
                ...editedPost, tags: [singleTag, ...editedPost.tags],
            })
            setSingleTag('')
        }
    }
    
    const handleTextChange = e => {
        setEditedPost({ ...editedPost, text: e.target.value })
    }

    

    const handleEditPostSubmit = (e) => {
        const formData = new FormData()
        // formData.append('image', imgUrl)
        formData.append('likes', editedPost.likes)
        formData.append('tags', editedPost.tags)
        formData.append('text', editedPost.text)
        formData.append('owner', loggedUser.userInfo.id)

        const url = `https://dummyapi.io/data/v1/post/create`

        const headers = {
            'app-id': "62b1dfc56fa280809ad74846",
            "Access-Control-Allow-Origin": "*",
        }
        const body = {
            'owner': loggedUser.userInfo.id,
            'post': {
                // image: imgUrl,
                likes: editedPost.likes,
                text: editedPost.text,
                tags: editedPost.tags,
            }
        }
        // console.log('body : ',body.post.values())
        axios.post(url, body, { headers })
            .then(res => {
                // console.log('posts state : ', posts)
                console.log('res data : ', res.data)
            })
            .catch(er => console.log(er))
    }

    const modalStyles = postModalStyling();
    return (
        <Modal isOpen
            onRequestClose={() => setEditModalOpen(false)}
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
            }}>
            <form className={modalStyles.modalContainer} onSubmit={e => handleEditPostSubmit(e)}>
                <div className={modalStyles.inputWrapper}>
                    <label htmlFor="image">Pic</label>
                    <input
                        type="file"
                        id="image"
                        className={modalStyles.uploadButton}
                        onChange={e => handleImageChange(e)}
                    />
                </div>
                <div className={modalStyles.tagsInputWrapper}>
                    <div className={modalStyles.tagsInputTop}>
                        <label htmlFor="tags">Tag It</label>
                        <div className={modalStyles.tagsInputandButton}>
                            <input
                                type="text"
                                id="tags"
                                className={modalStyles.tagsInput}
                                // value={singleTag}
                                onChange={e => handleTagChange(e)}
                            />
                            <button onClick={e => handleTagAdd(e)}>+</button>
                        </div>
                    </div>

                    {post.tags
                        ? <div className={modalStyles.tagsDisplay}>
                            {post.tags.map((item, index) => {
                                return (
                                    <span key={index} className={modalStyles.singleTagDisplay}>{item}</span>
                                )
                            })}</div>
                        : null}
                </div>
                <div className={modalStyles.inputWrapper}>
                    <label htmlFor="text"></label>
                    <textarea
                        id="text"
                        className={modalStyles.textInput}
                        value={post.text}
                        onChange={e => handleTextChange(e)}
                    />
                </div>
                <div className={modalStyles.buttonsContainer}>

                    <button type="button" className={modalStyles.button} onClick={() => setEditModalOpen(false)}>Cancel</button>
                    <button type="submit" className={modalStyles.button}>Post</button>
                </div>
            </form>
        </Modal>
    )
}

export default EditPostModal
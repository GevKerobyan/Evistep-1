import axios from "axios";
import { useState } from "react";
import useUserContext from "../../Hooks/useUserContext";
import Modal from "react-modal";
import Tag from "../Tag/Tag";
import { postModalStyling } from "./newPostModalStyling";
import styled from "styled-components";


const CloseBtn = styled.button`
	position: absolute;
	height: 40px;
	width: 40px;
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
	height: 20px;
	width: 20px;
	font-size: 20px;
	color: white;
	transform: translate(25%, -25%);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function NewPostModal({ setAddModalOpen, posts }) {
    const modalStyles = postModalStyling()
    const [singleTag, setSingleTag] = useState('')
    const { loggedUser, dispatch } = useUserContext()
    const [newPost, setNewPost] = useState({
        image: '',
        likes: 0,
        tags: [],
        text: '',
    })

    // INPUT CHANGE HANDLERS
    const handleImageChange = e => {
        setNewPost({ ...newPost, image: e.target.files[0] })
    }
    const handleTagChange = e => {
        setSingleTag(e.target.value)
    }
    const handleTagAdd = (e) => {
        e.preventDefault()
        if (singleTag) {
            setNewPost({
                ...newPost, tags: [singleTag, ...newPost.tags],
            })
            setSingleTag('')
        }
    }
    const handleTextChange = e => {
        setNewPost({ ...newPost, text: e.target.value })
    }

    const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPqkjwiZzga1mtcjRHaYOAIFOZmqHicEq-Z_sZ65xf4aGJ5nHiT5PrHM677z5UOYCbSA&usqp=CAU'

    const handleNewPostSubmit = (e) => {
        const formData = new FormData()
        console.log('consoling: newPost :::', newPost)
        // formData.append('image', imgUrl)
        formData.append('likes', newPost.likes)
        formData.append('tags', newPost.tags)
        formData.append('text', newPost.text)
        formData.append('owner', loggedUser.userInfo.id)

        const url = `https://dummyapi.io/data/v1/post/create`

        const headers = {
            'app-id': "62b1dfc56fa280809ad74846",
            "Access-Control-Allow-Origin": "*",
        }
        const body = {
            'owner': loggedUser.userInfo.id,
            'post': {
                image: imgUrl,
                likes: newPost.likes,
                text: newPost.text,
                tags: newPost.tags,
            }
        }
        axios.post(url, body, { headers })
            .then(res => {
                console.log('posts state : ', posts)
                console.log('res data : ', res.data)
            })
            .catch(er => console.log(er))
    }

    return (
        <Modal isOpen
            onRequestClose={() => setAddModalOpen(false)}
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
                    minHeight: '60%',
                    width: '450px',
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
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}>
                <CloseBtn onClick={() => setAddModalOpen(false)}>
                    <Xspan>X</Xspan>
                </CloseBtn>
                <form className={modalStyles.modalContainer} >
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
                                    value={singleTag}
                                    onChange={e => handleTagChange(e)}
                                />
                                <button onClick={e => handleTagAdd(e)}>+</button>
                            </div>
                        </div>
                        {newPost.tags
                            ? <div className={modalStyles.tagsDisplay}>
                                {newPost.tags.map((item, index) => {
                                    return (
                                        <Tag
                                            key={index}
                                            className={modalStyles.singleTagDisplay}
                                            tag={item}
                                            postId={`newTag`}
                                        >{item}</Tag>
                                    )
                                })}
                            </div>
                            : null}
                    </div>
                    <div className={modalStyles.inputWrapper}>
                        <label htmlFor="text"></label>
                        <textarea
                            id="text"
                            className={modalStyles.textInput}
                            value={newPost.text}
                            onChange={e => handleTextChange(e)}
                        />
                    </div>
                    <div className={modalStyles.buttonsContainer}>
                        <button type="button" className={modalStyles.button} onClick={() => setAddModalOpen(false)}>Cancel</button>
                        <button type="button" className={modalStyles.button} onClick={e => handleNewPostSubmit(e)}>Post</button>
                    </div>
                </form>
        </Modal>
    )
}

export default NewPostModal
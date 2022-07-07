import axios from "axios";
import { useEffect, useState } from "react";
import useUserContext from "../../Hooks/useUserContext";
import ReactModal from "../Modal/Modal";
import Tag from "../Tag/Tag";


import { postModalStyling } from "./newPostModalStyling";

function NewPostModal({ setAddModalOpen, action, posts, setPosts }) {
    const modalStyles = postModalStyling()

    const { loggedUser, dispatch } = useUserContext()

    const [newPost, setNewPost] = useState({
        image: '',
        likes: 0,
        tags: [],
        text: '',
    })

    const [singleTag, setSingleTag] = useState('')

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
        console.log('consoling: newPost :::', newPost )
        formData.append('image', imgUrl)
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
        // console.log('body : ',body.post.values())
        
        axios.post(url, body, { headers })
            .then(res => {
                console.log('posts state : ', posts)
                console.log('res data : ', res.data)
            })
            .catch(er => console.log(er))
    }

    return (
        
        <ReactModal isOpen={true}>
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
                                    className = {modalStyles.singleTagDisplay}
                                    tag={item}
                                    postId = {`newTag`}
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
        </ReactModal>
    )
}

export default NewPostModal
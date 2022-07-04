import axios from "axios";
import { useEffect, useState } from "react";
import useUserContext from "../../Hooks/useUserContext";
import Modal from "../Modal/Modal";

import { postModalStyling } from "./newPostModalStyling";

function NewPostModal({ setAddModalOpen, action }) {
    const modalStyles = postModalStyling()
    const [newPost, setNewPost] = useState({
        image: '',
        likes: 0,
        tags: [],
        text: '',
    })

    const formData = new FormData()


    const { loggedUser, dispatch } = useUserContext()

    // const [singleImage, setSingleImage] = useState({})
    const [singleTag, setSingleTag] = useState('')

    const handleFileChange = e => {
        formData.append('image', e.target.files[0])
        console.log(formData.entries())

        setNewPost({...newPost, image: formData})
    }

    const handleChange = (e) => {
        switch (e.target.id) {
            
            case 'tags': {
                setSingleTag(e.target.value)
                break;
            }
            case 'text': {
                setNewPost({ ...newPost, text: e.target.value })
                break;
            }
            default: return;
        }
    }

    const handleAddTag = (e) => {
        e.preventDefault()
        if (singleTag) {
            setNewPost({
                ...newPost, tags: [singleTag, ...newPost.tags],
            })
            setSingleTag('')
        }
    }
    useEffect(()=>{
        // console.log('newImage : ', newPost.image.entries())

    },[newPost.image])

    const handleNewPostSubmit = (e) => {
        e.preventDefault()   
        const url = `https://dummyapi.io/data/v1/post/create`;
        const headers = {
            'app-id': "62b1dfc56fa280809ad74846",
            "Access-Control-Allow-Origin": "*"
        }
        // const owner = loggedUser.userInfo.id
        const body = { newPost, owner: loggedUser.userInfo.id }
        axios.post(url, { headers, body})
            .then(res => { console.log('res : ', res) })
            .catch(er => alert(er))
    }

    return (
        <Modal isOpen>
            <form className={modalStyles.modalContainer} >
                <div className={modalStyles.inputWrapper}>
                    <label htmlFor="image">Pic</label>
                    <input
                        type="file"
                        id="image"
                        className={modalStyles.uploadButton}
                        onChange={e => handleFileChange(e)}
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
                                onChange={e => handleChange(e)}
                            />
                            <button onClick={e => handleAddTag(e)}>+</button>
                        </div>
                    </div>
                    {newPost.tags
                        ? <div className={modalStyles.tagsDisplay}>
                            {newPost.tags.map((item, index) => {
                                return (
                                    <span key={index} className={modalStyles.singleTagDisplay}>{item}</span>
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
                        onChange={e => handleChange(e)}
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
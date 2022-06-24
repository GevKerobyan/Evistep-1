import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

import { postModalStyling } from "./newPostModalStyling";

function NewPostModal({ setAddModalOpen }) {
    const modalStyles = postModalStyling()
    const [newPost, setNewPost] = useState({
        image: '',
        likes: 0,
        tags: [],
        text: '',
    })
    // const userRenderFlag = useRef(true)


    const [singleImage, setSingleImage] = useState({})
    const [singleTag, setSingleTag] = useState('')



    const handleChange = (e) => {
        switch (e.target.id) {
            case 'image': {
                let img = e.target.files[0]
                setSingleImage(URL.createObjectURL(img))
                break;
            }
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

    useEffect(() => {
        console.log('image : ', singleImage)
    }, [singleImage])


    const handleAddTag = (e) => {
        e.preventDefault()
        console.log('tags 2: ', newPost.tags)
        if (singleTag) {
            setNewPost({
                ...newPost, tags: [singleTag, ...newPost.tags],
            })
            setSingleTag('')
        }
    }

    const handleNewPostSubmit = (e) => {
        e.prevent.default()
        // const sendData = new FormData();
        // sendData.append('image', {singleImage})
        const url = `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`;
        const headers = {
            'app-id': "62b1dfc56fa280809ad74846",
            "Access-Control-Allow-Origin": "*"
        }
        const body = { singleImage, newPost }
        axios.post(url, { headers, body })
            .then(res => { console.log('res : ', res) })
    }

    return (
        <Modal isOpen>
            <form className={modalStyles.modalContainer} onSubmit={e => handleNewPostSubmit(e)}>
                <div className={modalStyles.inputWrapper}>
                    <label htmlFor="image">Pic</label>
                    <input
                        type="file"
                        id="image"
                        className={modalStyles.uploadButton}
                        onChange={e => handleChange(e)}
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
                    <button type="submit" className={modalStyles.button}>Post</button>
                </div>
            </form>
        </Modal>
    )
}

export default NewPostModal

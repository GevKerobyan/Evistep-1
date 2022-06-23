import axios from "axios";
import { useEffect, useRef, useState } from "react";
import reactDOM from "react-dom";

import { postModalStyling } from "./newPostModalStyling";

function NewPostModal() {

    const modalStyles = postModalStyling()

    const userRenderFlag = useRef(true)

    const [newPost, setNewPost] = useState({
        image: '',
        likes: 0,
        tags: {
            singleTag: '',
            tagsList: [],
        },
        text: '',
    })

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'image': {
                let img = e.target.files[0]
                setNewPost({ ...newPost, image: URL.createObjectURL(img) })
                break;
            }
            case 'tags': {
                setNewPost({ ...newPost, tags: { ...newPost.tags, singleTag: e.target.value } })
                break;
            }
            case 'text': {
                setNewPost({ ...newPost, text: e.target.value })
                break;
            }
            default: return;
        }
    }

    const handleAddTag = e => {
        // e.prevent.default()
        newPost.tags.singleTag
        ?  setNewPost({ ...newPost, tags: { tagsList: [newPost.tags.singleTag, ...newPost.tags.tagsList], singleTag: '' } })
        : console.log('singleTag', newPost.tags.singleTag)
    }

    const handleNewPostSubmit = (e) => {
        // e.prevent.default()
        const url = `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`;
        const headers = {
            'app-id': "62b1dfc56fa280809ad74846",
            "Access-Control-Allow-Origin": "*"
        }

        axios.post(url, newPost, { headers })
            .then(res => { console.log('res : ', res) })
    }


    // useEffect(() => {
    //     console.log('image', newPost)
    // }, [newPost])

    return reactDOM.createPortal(
        <>
            <div className={modalStyles.modalBG}>
                <form className={modalStyles.modalContainer} onSubmit={e => handleNewPostSubmit(e)}>

                    <div className={modalStyles.uploadInputWrapper}>
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
                            <input
                                type="text"
                                id="tags"
                                className={modalStyles.tagsInput}
                                value={newPost.tags.singleTag}
                                onChange={e => handleChange(e)}
                            />
                            <button onClick={e => handleAddTag(e)}>+</button>
                        </div>
                        
                        {newPost.tags.tagsList
                            ? <div className={modalStyles.tagsDisplay}>
                                {newPost.tags.tagsList.map((item, index) => {
                                    return (
                                        <span key={index} className={modalStyles.singleTagDisplay}>{item}</span>
                                    )
                                })}</div>
                            : null}
                    </div>
                    <div className={modalStyles.textInputWrapper}>
                        <textarea
                            id="text"
                            className={modalStyles.texInput}
                            value={newPost.text}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <button type="submit">let's try</button>
                </form>
            </div>
        </>,
        document.getElementById('modal-root')
    )
}

export default NewPostModal

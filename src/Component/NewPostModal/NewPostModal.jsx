import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { postModalStyling } from "./newPostModalStyling";

function NewPostModal() {
    const modalStyles = postModalStyling()

    const userRenderFlag = useRef(true)

    const [newPost, setNewPost] = useState({
        image: '',
        likes: 0,
        tags: [],
        text: '',
    })

    // text: string(length: 6-50, preview only)
    // image: string(url)
    // likes: number(init value: 0)
    // tags: array(string)
    // owner: string(User id)

    // ID

    // Image

    // likes

    // tags

    // text

    // publish date

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'image': {
                let img = e.target.files[0]
                setNewPost({ ...newPost, image: img })
                break;
            }
            case 'lastNameInput': {
                // setNewPost({...newPost, lastName: e.target.value})
                break;
            }
            case 'text': {
                setNewPost({ ...newPost, text: e.target.value })
                break;
            }
            default: return;
        }
    }

    const handleNewPostSubmit = (e) => {
        e.prevent.default()
        if (userRenderFlag.curent) {
            const newPostPost = axios.create({
                baseURL: `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`,
                headers: {
                    'app-id': "62b043e72dfd91bd6b56c58d",
                },
                body: {newPost}
            })
            newPostPost.post()
            .then( res => {console.log(res)})
            userRenderFlag.current=false
        }
        console.log(URL.createObjectURL(newPost.image))
    }

    useEffect(() => {
        console.log('image', newPost)
    }, [newPost])

    return (
        <div className={modalStyles.modalWrapper}>
            <form onSubmit={e=> handleNewPostSubmit(e)}>

                <div>
                    <label htmlFor="image"></label>
                    <input
                        type="file"
                        id="image"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="mailInput"></label>
                    <input
                        type="text"
                        id="tags"
                        value={newPost.tags}
                        placeholder="now your mail and that's it"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="nameInput"></label>
                    <textarea
                        id="text"
                        value={newPost.text}
                        placeholder="Please tell us your name"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <button type="submit">let's try</button>
            </form>
        </div>
    )
}

export default NewPostModal

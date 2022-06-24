import Modal from "../Modal/Modal";
import { postModalStyling } from "../NewPostModal/newPostModalStyling";

function EditPostModal() {

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

    const modalStyles = postModalStyling();
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
                            })}</div>
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

export default EditPostModal
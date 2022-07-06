import modalStyling from "./modalStyling";
import reactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ children, isOpen, openPost, setOpenPost}) => {

    
    const modalStyles = modalStyling()

    const handleCloseModal = (e) => {
    
        if (e.target.id === 'Modal') {
            e.stopPropagation()
            setOpenPost(false)
        }
    }

    if (!isOpen) return null
    return reactDOM.createPortal(
        <>
            <div 
            id='Modal'
            className={openPost ? modalStyles.openPostModal : modalStyles.modalBG}
            onClick={e => handleCloseModal(e)}
            >
                {children}
            </div>
        </>, document.getElementById('modal-root'))

}

export default Modal
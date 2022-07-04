import modalStyling from "./modalStyling";
import reactDOM from "react-dom";

const Modal = ({ children, isOpen, openPost}) => {

    
    const modalStyles = modalStyling(openPost)

    if (!isOpen) return null
    return reactDOM.createPortal(
        <>
            <div className={openPost ? modalStyles.openPostModal : modalStyles.modalBG}>
                {children}
            </div>
        </>, document.getElementById('modal-root'))

}

export default Modal
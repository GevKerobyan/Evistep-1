import modalStyling from "./modalStyling";
import reactDOM from "react-dom";

const Modal = ({ children, isOpen }) => {

    
    const modalStyles = modalStyling()

    if (!isOpen) return null
    return reactDOM.createPortal(
        <>
            <div className={modalStyles.modalBG}>
                {children}
            </div>
        </>, document.getElementById('modal-root'))

}

export default Modal
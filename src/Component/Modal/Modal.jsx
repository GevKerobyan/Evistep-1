import modalStyling from "./modalStyling";

function Modal(addition) {

    const modalStyles = modalStyling()
    
    if (addition === 'user') {
        return (

            <div>Add User</div>

        )
    } else if (addition === 'post') {
        return (
            <div>Add Post</div>
        )
    }

}

export default Modal
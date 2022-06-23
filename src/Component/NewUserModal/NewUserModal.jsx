import axios from "axios"
import { useEffect, useState } from "react"
import { newUserModalStyling } from "./newUserModalStyling"
import reactDOM from "react-dom";

export const NewUserModal = ({ setNewUserModalOpen }) => {
    const modalStyles = newUserModalStyling()

    const regexCheck = new RegExp('^[a-zA-Z]+$')

    const [registerFlag, setRegisterFlag] = useState(false)
    const [pushedUser, setPushedUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    useEffect(() => {
        console.log(newUser)
    }, [newUser])

    const handleChange = (e) => {

        console.log('check', regexCheck.test(e.target.value))
        switch (e.target.id) {
            case 'nameInput': {
                setNewUser({ ...newUser, firstName: e.target.value })
                break;
            }
            case 'lastNameInput': {
                setNewUser({ ...newUser, lastName: e.target.value })
                break;
            }
            case 'mailInput': {
                setNewUser({ ...newUser, email: e.target.value })
                break;
            }
            default: return;
        }
    }

    const handleNewUserSubmit = (e) => {
        e.preventDefault()
        const url = `https://dummyapi.io/data/v1/user/create`;
        const headers = {
            'app-id': "62b1dfc56fa280809ad74846",
            "Access-Control-Allow-Origin": "*"
        }

        axios.post(url, newUser, { headers })
            .then(res => { handleResult(res.data) })
            .catch(er => { console.log(er) })
    }

    const handleResult = (user) => {
        console.log(user)
        setRegisterFlag(true)
        setPushedUser(user)
    }

    useEffect(() => {
        console.log(pushedUser)
    }, [pushedUser])

    return reactDOM.createPortal(
        <>
            <div className={modalStyles.modalBG} >
                {registerFlag
                    ? <div className={modalStyles.registerPopUp} onClick={() => setRegisterFlag(false)}>
                        <p>Welcome on board <strong>{pushedUser.firstName}</strong></p>
                        <p>Please confirm your mail at <strong>{pushedUser.email}</strong></p>
                    </div>
                    : null}
                <form onSubmit={handleNewUserSubmit} className={modalStyles.modalContainer}>
                    <div className={modalStyles.nameInputWrapper}>
                        <label htmlFor="nameInput">Your Name</label>
                        <input
                            type="text"
                            id="nameInput"
                            className={modalStyles.nameInput}
                            value={newUser.firstName}
                            onChange={e =>
                                regexCheck.test(e.target.value)
                                    ? handleChange(e)
                                    : null}
                        />
                    </div>
                    <div className={modalStyles.lastNameInputWrapper}>
                        <label htmlFor="lastNameInput">Lastname</label>
                        <input
                            type="text"
                            id="lastNameInput"
                            className={modalStyles.lastNameInput}
                            value={newUser.lastName}
                            onChange={e =>
                                regexCheck.test(e.target.value)
                                    ? handleChange(e)
                                    : null}
                        />
                    </div>
                    <div className={modalStyles.mailInputWrapper}>
                        <label htmlFor="mailInput">Email</label>
                        <input
                            type="email"
                            id="mailInput"
                            className={modalStyles.mailInput}
                            value={newUser.email}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className={modalStyles.buttonsContainer}>
                        <button className={modalStyles.submitButton} onClick={() => setNewUserModalOpen(false)}>Cancel</button>
                        <button type="submit" className={modalStyles.submitButton}>Let's Try</button>
                    </div>
                </form>
            </div>
        </>, document.getElementById('modal-root')
    )

}
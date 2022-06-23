import axios from "axios"
import { useEffect, useState } from "react"
import { newUserModalStyling } from "./newUserModalStyling"
import reactDOM from "react-dom";

export const NewUserModal = () => {
    const modalStyles = newUserModalStyling()

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    useEffect(() => {
        console.log(newUser)
    }, [newUser])
    // const [startFetching, setStartFetching] = useState(false)

    const handleChange = (e) => {
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
            .then(res => { console.log('res : ', res.data) })
            .catch(er => { console.log(er) })
    }

    return reactDOM.createPortal(
        <>
            <div className={modalStyles.modalBG} >
                <form onSubmit={handleNewUserSubmit} className={modalStyles.modalContainer}>
                    <div className={modalStyles.nameInputWrapper}>
                        <label htmlFor="nameInput">Your Name</label>
                        <input
                            type="text"
                            id="nameInput"
                            className={modalStyles.nameInput}
                            value={newUser.firstName}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className={modalStyles.lastNameInputWrapper}>
                        <label htmlFor="lastNameInput">Lastname</label>
                        <input
                            type="text"
                            id="lastNameInput"
                            className={modalStyles.lastNameInput}
                            value={newUser.lastName}
                            onChange={e => handleChange(e)}
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
                    <button type="submit" className={modalStyles.submitButton}>let's try</button>
                </form>
            </div>
        </>, document.getElementById('modal-root')
    )

}
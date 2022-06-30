import axios from "axios"
import { useEffect, useState } from "react"
import { newUserModalStyling } from "./newUserModalStyling"
import Modal from "../Modal/Modal";
import useUserContext from '../../Hooks/useUserContext'
import { useNavigate } from "react-router-dom";

export const NewUserModal = ({ setNewUserModalOpen }) => {
    const modalStyles = newUserModalStyling()



    const {loggedUser, dispatch} = useUserContext()
    const navigate = useNavigate()

    const regexCheck = new RegExp('^[a-zA-Z]+$')

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
            .then(res => handleResult(res.data))
            .catch(er => { console.log(er) })
    }

    useEffect(()=> {
        console.log('consoling: loggedUser :::', loggedUser )
        console.log('consoling: newUser :::', newUser )
        console.log('consoling: pushedUser :::', pushedUser )
        if(loggedUser.isLoggedIn){
            navigate(`/profile?id=${loggedUser.userInfo.id}`)
        }
    }, [loggedUser.isLoggedIn])

    const handleResult = (user) => {
        dispatch({type: 'createUser', user: user})
        setPushedUser(user)
    }

    return (
        <Modal isOpen>
            <form onSubmit={handleNewUserSubmit} className={modalStyles.modalContainer}>
                <div className={modalStyles.inputWrapper}>
                    <label htmlFor="nameInput">Your Name</label>
                    <input
                        type="text"
                        id="nameInput"
                        className={modalStyles.inputs}
                        value={newUser.firstName}
                        onChange={e =>
                            regexCheck.test(e.target.value)
                                ? handleChange(e)
                                : null}
                    />
                </div>
                <div className={modalStyles.inputWrapper}>
                    <label htmlFor="lastNameInput">Lastname</label>
                    <input
                        type="text"
                        id="lastNameInput"
                        className={modalStyles.inputs}
                        value={newUser.lastName}
                        onChange={e =>
                            regexCheck.test(e.target.value)
                                ? handleChange(e)
                                : null}
                    />
                </div>
                <div className={modalStyles.inputWrapper}>
                    <label htmlFor="mailInput">Email</label>
                    <input
                        type="email"
                        id="mailInput"
                        className={modalStyles.inputs}
                        value={newUser.email}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className={modalStyles.buttonsContainer}>
                    <button className={modalStyles.submitButton} onClick={() => setNewUserModalOpen(false)}>Cancel</button>
                    <button type="submit" className={modalStyles.submitButton}>Let's Try</button>
                </div>
            </form>
        </Modal >
    )
}
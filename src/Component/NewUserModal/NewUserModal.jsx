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

    if(loggedUser.isLoggedIn){
        navigate('/profile')
    }

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

    
   useEffect(()=> {
    localStorage.setItem('onlineUser', JSON.stringify(loggedUser))
},[loggedUser])

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
        console.log('consoling: dispatch :::', dispatch )
        dispatch({type: 'createUser', user: user})
        setRegisterFlag(true)
        setPushedUser(user)
    }

    useEffect(() => {
        console.log(pushedUser)
    }, [pushedUser])

    return (
        <Modal isOpen>
            {registerFlag
                ? <div className={modalStyles.registerPopUp} onClick={() => setRegisterFlag(false)}>
                    <p>Welcome on board <strong>{pushedUser.firstName}</strong></p>
                    <p>Please confirm your mail at <strong>{pushedUser.email}</strong></p>
                </div>
                : null}
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
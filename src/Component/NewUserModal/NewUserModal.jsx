import axios from "axios"
import { useEffect, useState } from "react"
import { newUserModalStyling } from "./newUserModalStyling"
import Modal from "react-modal";
import useUserContext from '../../Hooks/useUserContext'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const CloseBtn = styled.button`
	position: absolute;
	height: 60px;
	width: 60px;
	right: 0;
	top: 0;
	border: none;
	border-bottom-left-radius: 100%;
	background: #3C4CAD;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Xspan = styled.span`
	height: 30px;
	width: 30px;
	font-size: 25px;
	color: white;
	transform: translate(25%, -25%);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NewUserModal = ({ setSignUpModalOpen }) => {
    const modalStyles = newUserModalStyling()

    const { loggedUser, dispatch } = useUserContext()
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
            .then(navigate(`/profile/${loggedUser.userInfo.id}`))
            .catch(er => { console.log(er) })
    }

    const handleResult = (user) => {
        dispatch({ type: 'createUser', user: user })
        setPushedUser(user)
    }

    return (
        <Modal isOpen
            onRequestClose={() => setSignUpModalOpen(false)}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1000,
                    backgroundColor: 'rgba(0,0,0, 0.85)',

                },
                content: {
                    position: 'absolute',
                    minHeight: '50%',
                    width: '500px',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '10px',
                    outline: 'none',
                    padding: '20px 40px',
                    margin: '0 auto',
                    marginTop: '50vh',
                    transform: 'translateY(-60%)',
                    boxSizing: 'content-box',
                    border: 'none',
                },
            }}>
            <div className={modalStyles.modalContainer}>
                <form onSubmit={handleNewUserSubmit}>
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
                        <button className={modalStyles.submitButton} onClick={() => setSignUpModalOpen(false)}>Cancel</button>
                        <button type="submit" className={modalStyles.submitButton}>Let's Try</button>
                    </div>
                </form>
            </div>
        </ Modal>
    )
}
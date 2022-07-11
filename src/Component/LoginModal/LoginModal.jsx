import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../../Hooks/useUserContext";
import Modal from "react-modal";
import { loginStylings } from "./LoginModalStyling";

function LoginModal({ setLoginModal }) {

   const loginStyles = loginStylings()
   const [allUsers, setAllUsers] = useState([])
   const [loginUserCheck, setLoginUserCheck] = useState({
      id: '',
      userName: '',
      userLastName: '',
   })

   const navigate = useNavigate()

   const [checkFlag, setCheckFlag] = useState(false)
   const { loggedUser, dispatch } = useUserContext()

   const [page, setPage] = useState(0)
   const limit = 50;
   let total;

   useEffect(() => {
      if (loginUserCheck.id) navigate(`./posts`)
   }, [loginUserCheck.id])

   const handleChange = (e) => {
      switch (e.target.id) {
         case 'nameInput': {
            setLoginUserCheck({
               ...loginUserCheck,
               userName: e.target.value
            })
            break
         }
         case 'lastNameInput': {
            setLoginUserCheck({
               ...loginUserCheck,
               userLastName: e.target.value
            })
            break
         }
      }
   }

   useEffect(() => {
      const api = axios.create({
         baseURL: `https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`,
         headers: {
            'app-id': "62b043e72dfd91bd6b56c58d",
         }
      })
      api.get()
         .then(response => {
            total = response.data.total
            setAllUsers([
               ...allUsers,
               ...response.data.data])
            if (Math.ceil(total / limit) >= page + 1) {
               setPage(prev => prev += 1)
               console.log('consoling: allUsers :::', allUsers)
            }
         })
   }, [page, limit])

   const handleLoginSubmit = (e) => {
      e.preventDefault()
      allUsers.map(item => {
         if (item.firstName === loginUserCheck.userName
            &&
            item.lastName === loginUserCheck.userLastName) {
            return (setLoginUserCheck({
               ...loginUserCheck,
               id: item.id
            }),
               dispatch({ type: 'logIn', user: { ...item } })
            )
         } else console.log('first')
      })
      setCheckFlag(true)
   }
   return (
      <Modal isOpen
      onRequestClose={() => setLoginModal(false)} 
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
            height: '300px',
            width: '650px',
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
            transform: 'translateY(-50%)',
            boxSizing: 'content-box',
            border: 'none',
         },
      }}
      >
         <div className={loginStyles.modalContainer}>
         <form onSubmit={(e) => handleLoginSubmit(e)} >
            <h2>Sign In</h2>
            <div className={loginStyles.inputWrapper}>
               <label htmlFor="nameInput">Name</label>
               <input
                  type="text"
                  id="nameInput"
                  className={loginStyles.inputs}
                  value={loginUserCheck.userName}
                  onChange={e => handleChange(e)}
               />
            </div>
            <div className={loginStyles.inputWrapper}>
               <label htmlFor="mailInput">Lastname</label>
               <input
                  type="text"
                  id="lastNameInput"
                  className={loginStyles.inputs}
                  value={loginUserCheck.userEmail}
                  onChange={e => handleChange(e)}
               />
            </div>
            <div className={loginStyles.buttonsContainer}>
               <button className={loginStyles.button} onClick={() => setLoginModal(false)}>Cancel</button>
               <button type="submit" className={loginStyles.button}>Log In</button>
            </div>
         </form>
         </div>
      </Modal>
   )
}

export default LoginModal
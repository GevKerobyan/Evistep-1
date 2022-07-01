import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../../Hooks/useUserContext";
import Modal from "../Modal/Modal";
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


   const loggingUserId = null

   useEffect(() => {
      if (loginUserCheck.id) navigate(`./profile/${loginUserCheck.id}`)
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
               console.log('consoling: allUsers :::', allUsers )
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
            dispatch({ type: 'logIn', user: {...item} })
            )
            
         } else console.log('first')
      })
      setCheckFlag(true)
   }

   return (
      <Modal isOpen>
         <form onSubmit={(e) => handleLoginSubmit(e)} className={loginStyles.modalContainer}>
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
      </Modal>
   )
}

export default LoginModal
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { loginStylings } from "./LoginModalStyling";

function LoginModal(setLoginModal) {

   const loginStyles = loginStylings()
   const [allUsers, setAllUsers] = useState([])
   const [loginUserCheck, setLoginUserCheck] = useState({
      id: '',
      userName: '',
      userLastName: '',
   })

   const navigate = useNavigate()



   const loggingUserId = null

   useEffect(() => {
      allUsers.map(item => {
          (item.firstName === loginUserCheck.userName
            &&
            item.lastName === loginUserCheck.userLastName)
            ? setLoginUserCheck({
               ...loginUserCheck,
               id: item.id
            })
            : console.log('no such user')
      })
   }, [allUsers])
   
   useEffect(()=> {
      console.log('consoling: loginUserCheck :::', loginUserCheck )
   },[loginUserCheck])

   useEffect(()=> {
      if(loginUserCheck.id) navigate('./profile', {state: loginUserCheck.id})
},[loginUserCheck.id])

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

   const handleLoginSubmit = (e) => {
      e.preventDefault()
      const api = axios.create({
         baseURL: `https://dummyapi.io/data/v1/user`,
         headers: {
            'app-id': "62b043e72dfd91bd6b56c58d",
         }
      })
      api.get()
         .then(response => {
            console.log('res', response.data.data)
            setAllUsers(response.data.data)})
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
               <label htmlFor="mailInput">Email</label>
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
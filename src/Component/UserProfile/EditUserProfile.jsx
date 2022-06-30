import axios from "axios"
import { useEffect, useState } from "react"
import useUserContext from "../../Hooks/useUserContext"
import Modal from "../Modal/Modal"
import editProfileStyling from "./EditUserProfileStyling"

function EditUserProfile({ setEditModalOpen }) {

   const editStyles = editProfileStyling()
   const { loggedUser, dispatch } = useUserContext()

   const [tempLoggedUserData, setTempLoggedUserData] = useState({
      ...loggedUser.userInfo
   })

   const regexCheck = new RegExp('^\d+$')

   useEffect(() => {
      console.log('consoling: tempLoggedUserData :::', tempLoggedUserData)
   }, [tempLoggedUserData])

   const handleEditUserSubmit = (e) => {
      e.preventDefault()
      const url = `https://dummyapi.io/data/v1/user/${loggedUser.userInfo.id}`;
      const headers = {
         'app-id': "62b1dfc56fa280809ad74846",
         "Access-Control-Allow-Origin": "*"
      }

      const data = {
         firstName: tempLoggedUserData.firstName,
         lastName: tempLoggedUserData.lastName,
         phone: tempLoggedUserData.phone,
      }

      axios.put(url, { data }, { headers })
         .then(res => handleEditResult(res.data))
         .catch(er => { alert(er) })
   }

   const handleEditResult = (user) => {
      dispatch({ type: 'editUser', user: user })
   }

   return (
      <Modal isOpen>
         <form onSubmit={e => handleEditUserSubmit(e)} className={editStyles.modalContainer}>
            <div className={editStyles.inputWrapper}>
               <label htmlFor='firstName'>Change Name</label>
               <input type='text' id='firstName' value={tempLoggedUserData.firstName}
                  onChange={(e) => setTempLoggedUserData({ ...tempLoggedUserData, firstName: e.target.value })}
                  className={editStyles.inputs} />
            </div>

            <div className={editStyles.inputWrapper}>
               <label htmlFor='lastName'>Change Last Name</label>
               <input type='text' id='lastName' value={tempLoggedUserData.lastName}
                  onChange={(e) => setTempLoggedUserData({ ...tempLoggedUserData, lastName: e.target.value })}
                  className={editStyles.inputs} />
            </div>

            <div className={editStyles.inputWrapper}>
               <label htmlFor='DoB'>Change Date of Birth</label>
               <input type='date' id='DoB' value={tempLoggedUserData.dateOfBirth}
                  onChange={(e) => setTempLoggedUserData({ ...tempLoggedUserData, dateOfBirth: e.target.value })}
                  className={editStyles.inputs} />
            </div>

            <div className={editStyles.inputWrapper}>
               <label htmlFor='phone'>Change Phone</label>
               <input type='text' id='phone' value={tempLoggedUserData.phone}
                  onChange={e => setTempLoggedUserData({ ...tempLoggedUserData, phone: e.target.value })}
                  className={editStyles.inputs} />
            </div>

            {/* <div>
               <label htmlFor='pic'>Change Name</label>
               <input type='file' id='pic' value={loggedUser.userInfo.picture.toString()}/>
            </div> */}

            <div className={editStyles.buttonsContainer}>
               <button className={editStyles.submitButton} onClick={() => setEditModalOpen(false)}>Cancel</button>
               <button type="submit" className={editStyles.submitButton}>Submit Changes</button>
            </div>


         </form>
      </Modal>
   )
}

export default EditUserProfile
import axios from "axios"
import { useEffect, useState } from "react"
import useUserContext from "../../Hooks/useUserContext"
import Modal from "react-modal"
import editProfileStyling from "./EditUserProfileStyling"
import styled from "styled-components"

const CloseBtn = styled.button`
	position: absolute;
	height: 40px;
	width: 40px;
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
	height: 20px;
	width: 20px;
	font-size: 20px;
	color: white;
	transform: translate(25%, -25%);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function EditUserProfile({ setEditModalOpen }) {

   const editStyles = editProfileStyling()
   const { loggedUser, dispatch } = useUserContext()

   const [tempLoggedUserData, setTempLoggedUserData] = useState({
      ...loggedUser.userInfo
   })

   const regexCheck = new RegExp('^\d+$')

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

      axios.put(url, data ,{ headers } )
         .then(res => handleEditResult(res.data))
         .catch(er => { alert(er) })
   }

   const handleEditResult = (user) => {
      dispatch({ type: 'editUser', user: user })
   }

   return (
      <Modal isOpen
      onRequestClose={() => setEditModalOpen(false)}
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
              minHeight: '60%',
              width: '450px',
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
          },
      }}>
          <CloseBtn onClick={() => setEditModalOpen(false)}>
              <Xspan>X</Xspan>
          </CloseBtn>
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
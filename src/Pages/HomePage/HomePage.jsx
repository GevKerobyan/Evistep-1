import { useEffect, useState } from "react"
import { NewUserModal } from "../../Component/NewUserModal/NewUserModal"
import { homeStylings } from "./homePageStyling"

function HomePage() {
   const homePageStyles = homeStylings()
   const [isModal, setModal]= useState(false)

   const handelSignUpClick =( ) => {
      setModal(!isModal)
   }


  return (
   
    <div className={homePageStyles.page}>
      <div className={homePageStyles.logSignWrapper}>
         <button className={homePageStyles.button} onClick={() => {}}>Log In</button>
         <button className={homePageStyles.button} onClick={handelSignUpClick}>Sign Up</button>
      </div>
      {isModal&&<NewUserModal setNewUserModalOpen={setModal} />}
    </div>
  )
}

export default HomePage
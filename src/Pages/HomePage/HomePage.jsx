import axios from "axios"
import { useEffect, useState } from "react"
import LoginModal from "../../Component/LoginModal/LoginModal"
import { NewUserModal } from "../../Component/NewUserModal/NewUserModal"
import { homeStylings } from "./homePageStyling"

function HomePage() {
  const homePageStyles = homeStylings()
  const [isSignUpModal, setModal] = useState(false)
  const [isLoginModal, setLoginModal] = useState(false)

  const handelSignUpClick = () => {
    setModal(!isSignUpModal)
  }

  const handleLoginClick = () => {
    setLoginModal(!isLoginModal)
  }

  useEffect(()=> {
    const url = "https://dummyapi.io/data/v1/user?page=1&limit=50"
    const options = {
        method: "GET",
        headers: {
            'app-id': "62b043e72dfd91bd6b56c58d",
        }
    }

        fetch(url, options)
            .then(response => response.json())
            // .then(res => console.log('consoling: res :::', res.data ))
  },[])

  return (
      <div className={homePageStyles.page}>
        <div className={homePageStyles.logSignWrapper}>
          <button className={homePageStyles.button} onClick={handleLoginClick}>Log In</button>
          <button className={homePageStyles.button} onClick={handelSignUpClick}>Sign Up</button>
        </div>

        {(isLoginModal && <LoginModal setLoginModal={setLoginModal} />) || (isSignUpModal && <NewUserModal setNewUserModalOpen={setModal} />)}
      </div>
  )
}

export default HomePage
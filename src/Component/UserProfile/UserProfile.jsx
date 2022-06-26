import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useUserContext from "../../Hooks/useUserContext";
import NavBar from "../NavBar/NavBar";
import UserProfileStyles from "./UserProfileStyling";

// const axios = require('axios').default;



export const UserProfile = () => {
  const profileUser = useLocation()

  const { loggedUser, dispatch } = useUserContext()
  const userPageStyles = UserProfileStyles()
  const [user, setUser] = useState({})

  const userRenderFlag = useRef(true);

  useEffect(() => {
    if (userRenderFlag.current) {
      const api = axios.create({
        baseURL: `https://dummyapi.io/data/v1/user/${loggedUser.userInfo.id}`,
        headers: {
          'app-id': "62b043e72dfd91bd6b56c58d",
        }
      })
      api.get()
        .then(response => setUser(response.data))
    }
    userRenderFlag.current = false
  }, [])
  console.log('localStorage', localStorage)

  useEffect(() => console.log('rendervec', user), [user])



  return (
    <>
      <NavBar> </NavBar>
      <div key={loggedUser.userInfo.id} className={userPageStyles.pageContainer}>
        <div className={userPageStyles.userContainer}>
          <div className={userPageStyles.left}>
            <p><span>ID: </span>{loggedUser.userInfo.id}</p>
            <img src={loggedUser.userInfo.picture} alt=''></img>
          </div>

          <div className={userPageStyles.middle}>
            <div className={userPageStyles.middleTop}>
              <span>
                {loggedUser.userInfo.title} {loggedUser.userInfo.firstName} {loggedUser.userInfo.lastName}
              </span>
              <p>
                <span>Gender: </span>{loggedUser.userInfo.gender}
              </p>

              <p>
                <span>Date of birth: </span>{loggedUser.userInfo.dateOfBirth}
              </p>

              <p>
                <span>Register date: </span>{loggedUser.userInfo.registerDate}
              </p>
            </div>
            <div className={userPageStyles.middleBottom}>
              <p><span>Email: </span>{loggedUser.userInfo.email}</p>
              <p><span>Phone: </span>{loggedUser.userInfo.phone}</p>
            </div>
          </div>

          <div className={userPageStyles.right}>
            <p>
              <span>Address</span>
            </p>

            {/* <p>State: {address.state}</p> */}
            {/* <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          <p>Country: {address.country}</p>
          <p>Timezone: {address.timezone}</p> */}
          </div>
        </div>

        <div className={userPageStyles.userFooter}>
          <div>Show User Posts</div>
          <div className={userPageStyles.edit} onClick={(e) => { console.dir(e.target) }}>Edit Profile</div>
          <div className={userPageStyles.delete} onClick={() => { }}>Delete Profile</div>
        </div>
      </div>
    </>

  )
}
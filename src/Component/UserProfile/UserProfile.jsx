import axios from "axios";
import { useEffect, useRef, useState } from "react";
import UserProfileStyles from "./UserProfileStyling";

// const axios = require('axios').default;


export const UserProfile = () => {
  const userPageStyles = UserProfileStyles()
  const [user, setUser] = useState({})
  const address = { ...user.location };

  const userRenderFlag = useRef(true);
  


  useEffect(() => {
    if (userRenderFlag.current){
      const api = axios.create({
        baseURL: `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`,
        headers: {
           'app-id': "62b043e72dfd91bd6b56c58d",
          }
      })
    
      api.get()
      .then(response => setUser(response.data))}
      userRenderFlag.current = false
  }, [user])

  useEffect(()=> console.log('rendervec', user), [user])

  return (
    <div key={user.id} className={userPageStyles.pageContainer}>
      <div className={userPageStyles.userContainer}>
        <div className={userPageStyles.left}>
          <p><span>ID: </span>{user.id}</p>
          <img src={user.picture} alt=''></img>
        </div>

        <div className={userPageStyles.middle}>
          <div className={userPageStyles.middleTop}>
            <span>
              {user.title} {user.firstName} {user.lastName}
            </span>
            <p>
              <span>Gender: </span>{user.gender}
            </p>

            <p>
              <span>Date of birth: </span>{user.dateOfBirth}
            </p>

            <p>
              <span>Register date: </span>{user.registerDate}
            </p>
          </div>
          <div className={userPageStyles.middleBottom}>
            <p><span>Email: </span>{user.email}</p>
            <p><span>Phone: </span>{user.phone}</p>
          </div>
        </div>

        <div className={userPageStyles.right}>
          <p>
            <span>Address</span>
          </p>

          <p>State: {address.state}</p>
          <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          <p>Country: {address.country}</p>
          <p>Timezone: {address.timezone}</p>
        </div>
      </div>

      <div className={userPageStyles.userFooter}>
        <div>Show User Posts</div>
        <div className={userPageStyles.edit} onClick={(e) => { console.dir(e.target) }}>Edit Profile</div>
        <div className={userPageStyles.delete} onClick={() => { }}>Delete Profile</div>
      </div>
    </div>
  )
}
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useUserContext from "../../Hooks/useUserContext";
import NavBar from "../NavBar/NavBar";
import UserProfileStyles from "./UserProfileStyling";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const profileUser = useLocation()

  const { loggedUser, dispatch } = useUserContext()
  const userPageStyles = UserProfileStyles()

  const userRenderFlag = useRef(true);

  const navigate = useNavigate()
  const [userPosts, setUserPosts] = useState([])

  if (!loggedUser.isLoggedIn) {
    navigate('/')
  }

  useEffect(()=> {
    console.log('consoling: loggedUser :::', loggedUser )
  },[loggedUser])


  useEffect(() => {
    if (userRenderFlag.current) {
      const api = axios.create({
        baseURL: `https://dummyapi.io/data/v1/user/${profileUser.state}`,
        headers: {
          'app-id': "62b043e72dfd91bd6b56c58d",
        }
      })
      api.get()
        .then(response => dispatch({type: 'logIn', user: response.data}))
    }
    userRenderFlag.current = false
  }, [])

  const loadUserPosts = () => {
    console.log('consoling: profileUser.state :::', profileUser.state )
    const api = axios.create({
      baseURL: `https://dummyapi.io/data/v1/user/${profileUser.state}/post`,
      headers: {
        'app-id': "62b043e72dfd91bd6b56c58d",
      }
    })
    api.get()
      .then(response => console.log('consoling: response :::', response ) )
  }

  // setUserPosts(response)

  return (
    <>
      <NavBar />
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

            <p>State: {loggedUser.userInfo.location?.state ? loggedUser.userInfo.location.state : null}</p>
            <p>Street: {loggedUser.userInfo.location?.street ? loggedUser.userInfo.location.street : null}</p>
            <p>City: {loggedUser.userInfo.location?.city ? loggedUser.userInfo.location.city : null}</p>
            <p>Country: {loggedUser.userInfo.location?.country ? loggedUser.userInfo.location.country : null}</p>
            <p>Timezone: {loggedUser.userInfo.location?.timezone ? loggedUser.userInfo.location.timezone : null} </p>
          </div>
        </div>

        <div className={userPageStyles.userFooter}>
          <div className={userPageStyles.loadPosts} onClick={loadUserPosts}>Show User Posts</div>
          <div className={userPageStyles.edit} onClick={(e) => { console.dir(e.target) }}>Edit Profile</div>
          <div className={userPageStyles.delete} onClick={() => { }}>Delete Profile</div>
        </div>
      </div>
    </>
  )
}
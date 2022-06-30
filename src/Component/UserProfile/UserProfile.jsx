import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import useUserContext from "../../Hooks/useUserContext";
import NavBar from "../NavBar/NavBar";
import UserProfileStyles from "./UserProfileStyling";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import EditUserProfile from "./EditUserProfile";
import fixDate from "../../Helpers/dateFix";

export const UserProfile = () => {
  const profileUser = useLocation()
  const match = useParams()

  const { loggedUser, dispatch } = useUserContext()
  const userPageStyles = UserProfileStyles()

  const userRenderFlag = useRef(true);

  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteFlag, setDeleteFlag] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const [userPosts, setUserPosts] = useState([])

  // console.log(user);

  // if (!loggedUser.isLoggedIn) {
  //   navigate('/users')
  // }

  useEffect(() => {
    if (userRenderFlag.current) {
      const api = axios.create({
        baseURL: `https://dummyapi.io/data/v1/user/${match.id}`,
        headers: {
          'app-id': "62b043e72dfd91bd6b56c58d",
        }
      })
      api.get()
        .then(({ data }) => dispatch({type: 'createUser', user: data}))
        .then(console.log('consoling: loggedUser :::', loggedUser ))
    }
    userRenderFlag.current = false
  }, [])

  const loadUserPosts = () => {
    const api = axios.create({
      baseURL: `https://dummyapi.io/data/v1/user/${match.id}/post`,
      headers: {
        'app-id': "62b043e72dfd91bd6b56c58d",
      }
    })
    api.get()
      .then(response => console.log('consoling: response :::', response))
  }

  const handleDelete = () => {
    const api = axios.create({
      baseURL: `https://dummyapi.io/data/v1/user/${match.id}`,
      headers: {
        'app-id': "62b043e72dfd91bd6b56c58d",
      }
    })
    api.delete()
      .then(response => console.log('consoling: response :::', response))
  }

  return (
    <>
      <NavBar />
      {deleteFlag
        ? <>
          <div className={userPageStyles.deletePopUpWrapper}>
            <h2 className={userPageStyles.deletePopUpText}>Are you sure you want to delete?</h2>
            <div className={userPageStyles.buttonContainer}>
              <button className={userPageStyles.deleteYes} onClick={handleDelete}>Yes</button>
              <button className={userPageStyles.deleteNo} onClick={()=>setDeleteFlag(false)}>No</button>
            </div>
          </div>
        </>
        : null
      }

      {editModalOpen
      ? <EditUserProfile setEditModalOpen={setEditModalOpen} />
        : null
    }

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
                <span>Date of birth: </span>{fixDate(new Date(loggedUser.userInfo.dateOfBirth))}
              </p>

              <p>
                <span>Register date: </span>{fixDate(new Date(loggedUser.userInfo.registerDate))}
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
          {loggedUser.isLoggedIn
            ? <>
              <div className={userPageStyles.edit} onClick={() => { setEditModalOpen(true) }}>Edit Profile</div>
              <div className={userPageStyles.delete} onClick={() => { setDeleteFlag(true) }}>Delete Profile</div>
            </>
            : null
          }
        </div>
      </div>
    </>
  )
}
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { unstable_HistoryRouter, useLocation } from "react-router-dom";
import useUserContext from "../../Hooks/useUserContext";
import NavBar from "../NavBar/NavBar";
import UserProfileStyles from "./UserProfileStyling";
import { useNavigate, useParams } from "react-router-dom";
import EditUserProfile from "./EditUserProfile";
import fixDate from "../../Helpers/dateFix";
import SinglePost from "../SinglePostComponent/SinglePost";
import { PageContainer } from "../styled/PageContainer.styled";
import styled from "styled-components";
import { createBrowserHistory } from "history";


const ScrollTopBtn = styled.button`

  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: red; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
&:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
`

export const UserProfile = () => {
  const history = createBrowserHistory();
  
  const match = useParams()
  const [loading, setLoading] = useState(true)

  const { loggedUser, dispatch } = useUserContext()
  const userPageStyles = UserProfileStyles()

  const userRenderFlag = useRef(true);
  const [showScrollBtnFlag, setShowBtnFlag]=useState(false)

  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [userPosts, setUserPosts] = useState([])
  const [deleteFlag, setDeleteFlag] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [loadPostsFlag, setLoadPostsFlag] = useState(true)

  useEffect(() => {
    if (userRenderFlag.current) {
      const api = axios.create({
        baseURL: `https://dummyapi.io/data/v1/user/${match.id}`,
        headers: {
          'app-id': "62b043e72dfd91bd6b56c58d",
        }
      })
      api.get()
        .then(res => setUser(res.data))
        .then(() => setLoading(false))
    }
    userRenderFlag.current = false
  }, [])

  useEffect(() => {
    // console.log('consoling: user in profile :::', user)
  }, [user])

useEffect(()=> {
  console.log('es el es', document.body.scrollTop)
 
},[document.body.scrollTop])

  useEffect(() => {
    if (loadPostsFlag) {
      const api = axios.create({
        baseURL: `https://dummyapi.io/data/v1/user/${match.id}/post`,
        headers: {
          'app-id': "62b043e72dfd91bd6b56c58d",
        }
      })
      api.get()
        .then(response => setUserPosts(response.data.data))
    }
  }, [loadPostsFlag])

  const bDay = fixDate(new Date(user?.dateOfBirth))
  const regDay = fixDate(new Date(user?.registerDate))

  const handleDelete = () => {
    dispatch({ type: 'deleteUser' })
    setDeleteFlag(false)
    navigate(`/posts`)
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
      {editModalOpen && <EditUserProfile setEditModalOpen={setEditModalOpen} />}
      <NavBar />
      <PageContainer>
        {showScrollBtnFlag ? <ScrollTopBtn /> : console.log(window.scrollY, 'hesa')}

        {
          deleteFlag
            ? <>
              < div className={userPageStyles.deletePopUpWrapper}>
                <h2 className={userPageStyles.deletePopUpText}>Are you sure you want to delete?</h2>
                <div className={userPageStyles.buttonContainer}>
                  <button className={userPageStyles.deleteYes} onClick={handleDelete}>Yes</button>
                  <button className={userPageStyles.deleteNo} onClick={() => setDeleteFlag(false)}>No</button>
                </div>
              </div>
            </>
            : null
        }

        {loading
          ? <h1>Loading ...</h1>
          : <div key={user.id}>
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
                    <span>Date of birth: </span>{bDay === undefined ? '' : bDay}
                  </p>

                  <p>
                    <span>Register date: </span>{regDay}
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

                <p>State: {user.location?.state ? user.location.state : null}</p>
                <p>Street: {user.location?.street ? user.location.street : null}</p>
                <p>City: {user.location?.city ? user.location.city : null}</p>
                <p>Country: {user.location?.country ? user.location.country : null}</p>
                <p>Timezone: {user.location?.timezone ? user.location.timezone : null} </p>
              </div>
            </div>

            <div className={userPageStyles.userFooter}>
              <div className={userPageStyles.loadPosts} onClick={() => setLoadPostsFlag(!loadPostsFlag)}>{!loadPostsFlag ? `Show User Posts` : `Hide Posts`}</div>
              {loggedUser.userInfo.id === match.id
                ? <>
                  <div className={userPageStyles.edit} onClick={() => { setEditModalOpen(true) }}>Edit Profile</div>
                  <div className={userPageStyles.delete} onClick={() => { setDeleteFlag(true) }}>Delete Profile</div>
                </>
                : null
              }
            </div>

            {loadPostsFlag
              ? <div className={userPageStyles.userPostsContainer}>
                {userPosts.map(item => {
                  return <SinglePost key={item.id} post={item} className={userPageStyles.singleUserPost}></SinglePost>
                })}
              </div>
              : null
            }
          </div>
        }
      </PageContainer >
    </>
  )
}
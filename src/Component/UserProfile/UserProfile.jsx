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

const ScrollTopBtn = styled.button`
  position: fixed;
  bottom: 50px;
  
  left: ${((window.innerHeight + window.scrollY) > document.body.scrollHeight)
  ?  '100px'  : '300px'}
  background: transparent;
    outline: none;
  border: 1px solid black;
  font-size: 20px;
  color: black;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 1px 1px 10px rgba rgb(50, 50,50, 0.2);
  z-index: 100;
  
&:hover {
  background-color: rgba(50,50,50, 0.2);
  box-shadow: 1px 1px 1px rgba rgb(50, 50, 50)
}
`

export const UserProfile = () => {

  const match = useParams()
  const [loading, setLoading] = useState(true)

  const { loggedUser, dispatch } = useUserContext()
  const userPageStyles = UserProfileStyles()

  const userRenderFlag = useRef(true);
  const [showScrollBtnFlag, setShowBtnFlag] = useState(false)

  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [userPosts, setUserPosts] = useState([])
  const [deleteFlag, setDeleteFlag] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [loadPostsFlag, setLoadPostsFlag] = useState(true)

  useEffect(() => {
    window.scrollTo(0,0)
    window.addEventListener('scroll', scrollMethods)
    return () => {
      window.removeEventListener('scroll', scrollMethods)
    }
  }, [])

  function scrollMethods() {
    console.log((window.innerHeight + window.scrollY) > document.body.scrollHeight)
    window.scrollY>400 ? setShowBtnFlag(true) : setShowBtnFlag(false);
  }
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
        {showScrollBtnFlag && <ScrollTopBtn onClick={() => window.scrollTo(0, 70)} > ^ </ScrollTopBtn>}

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
              <div className={userPageStyles.userImgContainer}>
                <img src={user.picture} className={userPageStyles.userImg} alt='user image'></img>
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
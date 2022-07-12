import axios from "axios"
import { useRef } from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "../../Component/NavBar/NavBar"
import { NewUserModal } from "../../Component/NewUserModal/NewUserModal"
import { Button } from "../../Component/styled/Buttons.styled"
import { PageContainer } from "../../Component/styled/PageContainer.styled"
import { UserContainer } from "../../Component/styled/UserContainer.styled"
import userContainerStyles from "./UsersListStyling"

export const UsersList = () => {
    const userStyles = userContainerStyles()

    const [newUserModalOpen, setNewUserModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    const [userList, setUserList] = useState([])
    const [totalUsers, setTotalUsers] = useState(0)
    const [page, setPage] = useState(0)

    const limit = 10;
    let noMorePages = (page === Math.ceil(totalUsers / limit));

    const [observedElement, setObservedElement] = useState(null)

    useEffect(() => {
        const element = observedElement;
        const currentObserver = observer.current;
        if (element) {
            currentObserver.observe(element)
        }
        return () => {
            if (element) {
                currentObserver.unobserve(element)
            }
        }
    }, [observedElement])


    useEffect(() => {
        const api = axios.create({
            baseURL: `https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`,
            headers: {
                'app-id': "62b043e72dfd91bd6b56c58d",
            }
        })
        api.get()
            .then(response => {
                setTotalUsers(response.data.total)
                setUserList([...userList, ...response.data.data])
            })
    }, [page])

    const loadMore = entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setPage(prev => prev + 1)
        }
    }

    const observer = useRef(new IntersectionObserver(loadMore, { threshold: 1 }))

    return (
        <>
            <NavBar >
            </NavBar>
            <PageContainer>
                {newUserModalOpen
                    ? <NewUserModal setNewUserModalOpen={setNewUserModalOpen} />
                    : ''}
                {userList.map((user, index) => {
                    return (
                        <Link to={`/profile/${user.id}`} key={user.id + index}>
                            <UserContainer>
                                <img src={user.picture} className={userStyles.userPicture} alt='' />
                                <div className={userStyles.userInfo}>
                                    <div className={userStyles.userNames}>
                                        <span>{user.title} {user.firstName} {user.lastName}</span>
                                    </div>
                                </div>
                            </UserContainer>
                        </Link>
                    )
                })}
            </PageContainer>
            {loading
                ? <div>{userList.totalUsers === userList.users.length ? 'Loading...' : ''}</div>
                : !noMorePages
                    ? <div ref={setObservedElement} className={userStyles.showMore}>Show More Users</div>
                    : ''}

        </>
    )
}
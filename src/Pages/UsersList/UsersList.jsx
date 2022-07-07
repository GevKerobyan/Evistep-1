import axios from "axios"
import { useRef } from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "../../Component/NavBar/NavBar"
import { NewUserModal } from "../../Component/NewUserModal/NewUserModal"
import { Button } from "../../Component/styled/Buttons.styled"
import { PageContainer } from "../../Component/styled/PageContainer.styled"
import { UserContainer } from "../../Component/styled/UserContainer.styled"
import userConatinerStyles from "./UsersListStyling"

export const UsersList = () => {
    const userStyles = userConatinerStyles()
    const [data, setData] = useState([])
    const [newUserModalOpen, setNewUserModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    const [page, setPage] = useState(1)
    const limit = 20;
    let total;
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

    const loadMore = entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setLoading(true)
            const api = axios.create({
                baseURL: `https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`,
                headers: {
                    'app-id': "62b043e72dfd91bd6b56c58d",
                }
            })
            api.get()
                .then(response => {
                    total = response.data.total
                    console.log('total : ', total)
                    setData([
                        ...data,
                        ...response.data.data])
                })
            setLoading(true)
        }
    }

    const observer = useRef(new IntersectionObserver(loadMore, { threshold: 1 }))

    const url = "https://dummyapi.io/data/v1/user?limit=10"
    const options = {
        method: "GET",
        headers: {
            'app-id': "62b043e72dfd91bd6b56c58d",
        }
    }

    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(res => setData(...data, res.data))
    }, [])

    return (
        <>
            <NavBar >
            </NavBar>
            <PageContainer>
                {newUserModalOpen
                    ? <NewUserModal setNewUserModalOpen={setNewUserModalOpen} />
                    : ''}
                {data.map(user => {
                    return (
                        <Link to={`/profile/${user.id}`} key={user.id}>
                            <UserContainer>
                                <img src={user.picture} className={userStyles.userPicture} alt='' />
                                <div className={userStyles.userInfo}>
                                    <div className={userStyles.userId}>{user.id}</div>
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
                ? <div>{total===data.length ?'Loading...': ''}</div>
                : <div ref={setObservedElement}>Show More Users</div>}
        </>
    )
}
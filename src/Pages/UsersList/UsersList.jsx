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
                <span onClick={() => { setNewUserModalOpen(true) }}>Add User</span>
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
                <div>Show More Users</div>
        </>
    )
}
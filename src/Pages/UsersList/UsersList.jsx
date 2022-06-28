import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "../../Component/NavBar/NavBar"
import { NewUserModal } from "../../Component/NewUserModal/NewUserModal"
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
            <button onClick={() => { setNewUserModalOpen(true) }}>Add User</button>
            </NavBar>
            {/* <div className={userStyles.userListNavBar}>
                <div className={userStyles.addUser} onClick={() => { setNewUserModalOpen(true) }}>Add User</div>
            </div> */}
            <div className={userStyles.usersPage}>
                {newUserModalOpen
                    ? <NewUserModal setNewUserModalOpen={setNewUserModalOpen} />
                    : ''}
                {data.map(user => {
                    console.log(user);
                    return (
                        <Link to={`/profile/${user.id}`} key={user.id}>
                            <div className={userStyles.userContainer} >
                                <img src={user.picture} className={userStyles.userPicture} alt='' />
                                <div className={userStyles.userInfo}>
                                    <div className={userStyles.userId}>{user.id}</div>
                                    <div className={userStyles.userNames}>
                                        <span>{user.title} {user.firstName} {user.lastName}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                })}
            </div>
            <div>Show More Users</div>
        </>
    )
}
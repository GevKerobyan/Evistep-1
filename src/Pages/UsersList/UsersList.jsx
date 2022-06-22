import { useEffect, useState } from "react"
import { useAddUser } from "../../Actions/useAddUser"
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

    useEffect(() => {

        console.log(data)
    }, [data])



    return (
        <>
            <div className={userStyles.usersPage}>
                {newUserModalOpen
                    ? (<NewUserModal />)
                    : ''}
                {data.map((user, index) => {
                    return (
                        <div >
                            <div className={userStyles.userContainer} key={user.id}>
                                <img src={user.picture} className={userStyles.userPicture} alt='' />
                                <div className={userStyles.userInfo}>
                                    <div className={userStyles.userId}>{user.id}</div>
                                    <div className={userStyles.userNames}>
                                        <span>{user.title} {user.firstName} {user.lastName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
                <div className={userStyles.userListNavBar}>
                    <div className={userStyles.addUser} onClick={() => { setNewUserModalOpen(true) }}>Add User</div>
                </div>

            </div>
            <div>Show More Users</div>
        </>
    )
}
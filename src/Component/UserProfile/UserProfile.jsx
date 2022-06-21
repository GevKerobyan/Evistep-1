import { useEffect, useState } from "react";
import UserProfileStyles from "./UserProfileStyling";

export const UserProfile = () => {
    const userPageStyles = UserProfileStyles()
    const [user, setUser] = useState([])
    const address = {...user.location};

    const userId = '';
    

    const url = `https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca`
    const options = {
      method: "GET",
      headers: {
        'app-id':"62b043e72dfd91bd6b56c58d",
      }}

      useEffect(()=> {
        fetch(url, options)
        .then(response => response.json())
        .then(res => setUser(...user, res))
      },[])
      
      useEffect(()=>{
        console.log(user)
        console.log('address', address)
      },[user])
      
return (
        <div key={user.id} className={userPageStyles.pageContainer}>
            <div className={userPageStyles.userContainer}>
                <div className={userPageStyles.left}>
                    <p >{user.id}</p>
                    <img src={user.picture} alt=''></img>
                </div>

                <div className={userPageStyles.middle}>
                    <div className={userPageStyles.middleTop}>
                        <p>
                        {user.title} {user.firstName} {user.lastName}
                        </p>
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
                <div className={userPageStyles.edit}>Edit Profile</div>
                <div className={userPageStyles.delete}>Delete Profile</div>
            </div>
        </div>
    )
}
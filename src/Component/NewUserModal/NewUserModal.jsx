import axios from "axios"
import { useEffect, useState } from "react"
import { newUserModalStyling } from "./newUserModalStyling"

export const NewUserModal = () => {
    const modalStyles = newUserModalStyling()

    const [newUser, setNewUser] =useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    useEffect(()=> {
        console.log(newUser)
    },[newUser])
    // const [startFetching, setStartFetching] = useState(false)

    const handleChange = (e) => {
        switch(e.target.id) {
            case 'nameInput': {
                setNewUser({...newUser, firstName: e.target.value})
                break;
            }
            case 'lastNameInput': {
                setNewUser({...newUser, lastName: e.target.value})
                break;
            }
            case 'mailInput': {
                setNewUser({...newUser, email: e.target.value})
                break;
            }
            default: return;
        }
    }

    // const url = 
    
        //   const newUserApi = axios.create({
        //     baseURL: `https://dummyapi.io/data/v1/user/create`,
        //     headers: {
        //         'app-id': "62b1dfc56fa280809ad74846",
        //         "Access-Control-Allow-Origin": "*",
        //        },
        //     data:{
        //         "firstName": newUser.firstName,
        //         "lastName": newUser.lastName,
        //         "email": newUser.email,
        //     }
        // })      
    
    const handleNewUserSubmit = (e)=> {
        e.preventDefault()
        const url = `https://dummyapi.io/data/v1/user/create`;
        const headers = {
            'app-id': "62b1dfc56fa280809ad74846",
            "Access-Control-Allow-Origin": "*"
        }
        // const newUserApi = axios.create({
        //     baseURL: `https://dummyapi.io/data/v1/user/create`,
        //     headers: {
        //         'app-id': "62b1dfc56fa280809ad74846",
        //         "Access-Control-Allow-Origin": "*",
        //        },
        //     body:
        //     {
        //     'User Create': {
        //         // path: ['/firstName', '/lastName', '/email',],

        //         lastName: newUser.lastName,
        //         firstName: newUser.firstName,
        //         email: newUser.email,
        //     }
        // }
        // })      
        // console.log(newUser.lastName)
        axios.post(url, newUser, {headers})
        .then (res => {console.log('res : ',res.data)})
        .catch(er=> {console.log(er)})
    }

return (
    <div className={modalStyles.modalWrapper} > 
        <form onSubmit={handleNewUserSubmit}>
            <div>
                <label htmlFor="nameInput"></label>
                <input 
                    type="text" 
                    id="nameInput" 
                    value={newUser.firstName} 
                    placeholder="Please tell us your name" 
                    onChange={e=>handleChange(e)}
                />
            </div>
            <div>
                <label htmlFor="lastNameInput"></label>
                <input
                    type="text"
                    id="lastNameInput"
                    value={newUser.lastName}
                    placeholder="and your last name ? "
                    onChange={e=>handleChange(e)}
                />
            </div>
            <div>
                <label htmlFor="mailInput"></label>
                <input
                    type="email"
                    id="mailInput"
                    value={newUser.email}
                    placeholder="now your mail and that's it"
                    onChange={e=>handleChange(e)}
                />
            </div>
            <button type="submit">let's try</button>
        </form>
    </div>
)

}
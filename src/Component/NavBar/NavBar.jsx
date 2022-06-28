import useUserContext from "../../Hooks/useUserContext";
import navBarStyling from "./NavBarStyling";
import blankProfilePic from '../../Assets/blank-profile-picture.png'
import { Link, useNavigate } from "react-router-dom";

function NavBar({ children }) {

   const navStyles = navBarStyling()

   const navigate = useNavigate()

   const { loggedUser, dispatch } = useUserContext()

   const handleSignOut = () => {
      dispatch({ type: 'signOut', user: loggedUser })
      navigate('/');
   }

   return (
      <div className={navStyles.navWrapper}>
         <Link
            to='/posts'
            className={navStyles.home}>
            Home
         </Link>
         <Link
            to='/users'
            className={navStyles.home}>
            Users
         </Link>
         <div className={navStyles.container}>
            <div className={navStyles.userContainer}>
               <Link
                  to={`/profile/${loggedUser.userInfo.id}`}
                  className={navStyles.userImageContainer}>
                  <img src={loggedUser.userInfo.picture || blankProfilePic} className={navStyles.userImg} >
                  </img>
               </Link>
               <p className={navStyles.userName}>
                  {loggedUser.userInfo.firstName} {loggedUser.userInfo.lastName}
               </p>
            </div>
            <div className={navStyles.searchContainer}>
               <label htmlFor="search">Search</label>
               <input type="search" id='search' name="search" className={navStyles.searchInput} />
            </div>
            {children ? children : null}
            {loggedUser.isLoggedIn
               ? <button className={navStyles.button} onClick={handleSignOut}> Sign Out</button>
               : null
            }

         </div>
      </div>
   )
}

export default NavBar
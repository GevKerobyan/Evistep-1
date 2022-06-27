import useUserContext from "../../Hooks/useUserContext";
import navBarStyling from "./NavBarStyling";
import blankProfilePic from '../../Assets/blank-profile-picture.png'

function NavBar() {

   const navStyles = navBarStyling()

   const { loggedUser, dispatch } = useUserContext()

   const handleSignOut = () => {
      dispatch({type: 'signOut', user: loggedUser})
   }

   return (
      <div className={navStyles.navWrapper}>
         <div className={navStyles.container}>
            <div className={navStyles.userContainer}>
               <div className={navStyles.userImageContainer}>
                  <img src={loggedUser.userInfo.picture || blankProfilePic} className={navStyles.userImg}>
                  </img>
               </div>
               <p className={navStyles.userName}>
                  {loggedUser.userInfo.firstName} {loggedUser.userInfo.lastName}
               </p>
            </div>
            <div className={navStyles.searchContainer}>
               <label htmlFor="search">Search</label>
               <input type="search" id='search' name="search" className={navStyles.searchInput}/>
            </div>
            {loggedUser.isLoggedIn
               ? <button className={navStyles.button} onClick={handleSignOut}> Sign Out</button>
               : null
            }
         </div>
      </div>
   )
}

export default NavBar
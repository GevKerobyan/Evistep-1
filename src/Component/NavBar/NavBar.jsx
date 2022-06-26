import useUserContext from "../../Hooks/useUserContext";
import navBarStyling from "./NavBarStyling";

function NavBar() {

   const navStyles = navBarStyling()

   const {loggedUser, dispatch} = useUserContext()
   console.log('loggedUser', loggedUser)

   return (
      <div className={navStyles.navWrapper}>
         <div className={navStyles.container}>
            <div className={navStyles.userContainer}>
               <div className={navStyles.userImageContainer}>
                  <img src='' className={navStyles.userContainer}>
                  </img>
               </div>
               <p className={navStyles.userName}>{loggedUser.userInfo.firstName} {loggedUser.userInfo.firstName}</p>
            </div>
            <div className={navStyles.searchContainer}>
               <label htmlFor="search">Search</label>
               <input type="search" id='search' name="search" />
            </div>
         </div>
      </div>
   )
}

export default NavBar
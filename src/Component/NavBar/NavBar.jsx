import useUserContext from "../../Hooks/useUserContext";
import navBarStyling from "./NavBarStyling";
import blankProfilePic from '../../Assets/blank-profile-picture.png'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../styled/Buttons.styled";
import { useEffect } from "react";

function NavBar({ children }) {

   const navStyles = navBarStyling()

   const navigate = useNavigate()

   const { loggedUser, dispatch } = useUserContext()

   const handleSignOut = () => {
      dispatch({ type: 'signOut', user: loggedUser })
      navigate('/');
   }

   // console.log('loggedUser NAVBAR', loggedUser)

   let myNav;

useEffect(() => {
   myNav = document.querySelector("#Nav")
},[window.scroll])

   window.addEventListener("scroll", () => {
      (window.scrollY >= 5)
         ? myNav.classList.add('navStyles.scrolledNav')
         : myNav.style.boxShadow = '1px 1px 3px rgb(0, 0, 50)'
   });

   return (
      <div className={navStyles.navWrapper} id='Nav'>
         <div className={navStyles.leftLinkContainer}>
            <Link to='/posts'>
               <span>
                  Posts
               </span>
            </Link>
            <Link to='/users'>
               <span>
                  Users
               </span>
            </Link>
         </div>
         <div className={navStyles.container}>
            <Link
               to={loggedUser.userInfo.id ? `/profile/${loggedUser.userInfo.id}` : '/'}
               className={navStyles.userImageContainer}>
               <img src={loggedUser.userInfo.picture || blankProfilePic} className={navStyles.userImg} >
               </img>
            </Link>

            {/* <div className={navStyles.searchContainer}>
               <label htmlFor="search">Search</label>
               <input type="search" id='search' name="search" className={navStyles.searchInput} />
            </div> */}
            {children ? children : null}
            {loggedUser.isLoggedIn
               ? <span onClick={handleSignOut}> Sign Out </span>
               : <Link to={'/'} onClick={handleSignOut}><span>
                  Login
               </span></Link>
            }

         </div>
      </div>
   )
}

export default NavBar
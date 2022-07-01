import useUserContext from "../../Hooks/useUserContext";
import navBarStyling from "./NavBarStyling";
import blankProfilePic from '../../Assets/blank-profile-picture.png'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../styled/Buttons.styled";

function NavBar({ children }) {

   const navStyles = navBarStyling()

   const navigate = useNavigate()

   const { loggedUser, dispatch } = useUserContext()

   const handleSignOut = () => {
      dispatch({ type: 'signOut', user: loggedUser })
      navigate('/');
   }

   console.log('loggedUser NAVBAR', loggedUser)

   let myNav = document.querySelector("#Nav")

   window.addEventListener("scroll", (event) => {
      (window.scrollY >= 5) 
      ? myNav.style.boxShadow = '1px 4px 10px rgb(0, 0, 50)'
      : myNav.style.boxShadow = '1px 1px 3px rgb(0, 0, 50)'
  });

   return (
      <div className={navStyles.navWrapper} id='Nav'>
         <div className={navStyles.leftLinkContainer}>
            <Link to='/posts'>
               <Button>
                  Home
               </Button>
            </Link>
            <Link to='/users'>
               <Button>
                  Users
               </Button>
            </Link>
         </div>
         <div className={navStyles.container}>
            <div className={navStyles.userContainer}>
               <Link
                  to={loggedUser.userInfo.id ? `/profile/${loggedUser.userInfo.id}` : '/'}
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
               ? <Button onClick={handleSignOut}> Sign Out </Button>
               : <Link to={'/'} onClick={handleSignOut}><Button>
                  Login
               </Button></Link>
            }

         </div>
      </div>
   )
}

export default NavBar
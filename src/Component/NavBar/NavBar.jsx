import useUserContext from "../../Hooks/useUserContext";
import blankProfilePic from '../../Assets/blank-profile-picture.png'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import navBarStyling from "./NavBarStyling";

function NavBar({ children }) {

   const navRef = useRef(null)

   const navStyles = navBarStyling()

   const navigate = useNavigate()

   const { loggedUser, dispatch } = useUserContext()

   const handleSignOut = () => {
      dispatch({ type: 'signOut', user: loggedUser })
      navigate('/');
   }

   useEffect(() => {
      const addStylesToNavbar = () => {
         if (window.scrollY >= 5 && navRef.current) {
            if (!navRef.current.classList.contains('scrolled-nav')) {
               navRef.current.classList.add('scrolled-nav')
            }

         } else {
            if (navRef.current.classList.contains('scrolled-nav')) {
               navRef.current.classList.remove('scrolled-nav')
            }
         }
      }
      if (navRef.current) {
         window.addEventListener("scroll", addStylesToNavbar);
      }
      return () => window.removeEventListener('scroll', addStylesToNavbar)
   }, [navRef.current])

   return (
      <div ref={navRef} className={navStyles.navWrapper} id='Nav'>
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
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"



function Tag({ tag, postId }) {


   const navigate = useNavigate()

   const style = {
      postSingleTag: {

         margin: '0 4px 4px 0',
         padding: '4px 8px',
         font: '12px',
         display: 'flex',
         whiteSpace: 'nowrap',
         borderRadius: '3px',
         color: 'white',
         backgroundColor: 'rgb(122,38,64)',
      },

      postSingleTagPopUp: {
         position: 'absolute',
         transform: 'translate(0, -125%)',
         width: 'auto',
         maxWidth: '150px',
         left: '0 auto',
         padding: '7px 15px',
         backgroundColor: 'crimson',
         borderRadius: '10px',
         whiteSpace: 'normal',
         textAlign: 'center',
         fontSize: '12px',
         color: 'white'

      },
   }

   const handleTagClick = e => {
      e.stopPropagation()
      console.log(e.nativeEvent);
      console.log('barev');
         (e.detail >= 2) ? navigate(`/taggedposts/${tag}`) : console.log(e.detail);
   }

   const handleSearchClick = (e) => {
      e.stopPropagation()
   }

   return (
      <div style={style.postSingleTag} id={postId + tag} onClick={ e => handleTagClick(e)}>{tag}</div>
   )
}

export default Tag
import { useState } from "react"
import { Link } from "react-router-dom"


function Tag({ tag }) {

   const [tagSearchFlag, setTagSearchFlag] = useState(false)

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

   const handleTagClick = () => {
      setTagSearchFlag(false)
      setTagSearchFlag(true)
      console.log(tag)
      console.log('tagFlag', tagSearchFlag)
   }
   return (
      <>
         {
            tagSearchFlag
               ? <Link to={`/taggedposts/${tag}`} style={style.postSingleTagPopUp}>Search a {tag} tag ? </Link>
               : ''
         }
         <div style={style.postSingleTag} onClick={handleTagClick}>{tag}
         </div>
      </>
   )
}

export default Tag
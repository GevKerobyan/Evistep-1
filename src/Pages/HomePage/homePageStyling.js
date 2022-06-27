import { createUseStyles } from "react-jss";

export const homeStylings = createUseStyles({
   page: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },

   logSignWrapper: {
      width: '40%',
      height: '200px',
      padding: '0 100px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#004987',
      borderRadius: '12px',
   },

   button: {
      padding: '8px 15px',
      border: 'none',
      borderRadius: '8px',

   }
}) 
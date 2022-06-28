import React from 'react'

function ProtectedRoute({component, type}) {

   const { loggedUser, dispatch } = useUserContext()


   return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute
import React from 'react'
import { useAuth } from 'oidc-react'



const LoggedIn = () => {
  const auth = useAuth()

  if (auth && auth.userData) {

    return (
      <div>
      <p>
        Logged in! 🎉
      </p>
              <button onClick={() => auth.signOut() && auth.signOutRedirect()}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
            </div>
    )
  }
  return (
    <div>Not logged in! Wait until you are redirected to LifeScience.</div>
  )
}

export default LoggedIn

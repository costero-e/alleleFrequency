import React from 'react'
import { useAuth } from 'oidc-react'
import { Button } from 'react-bootstrap';


const LoggedIn = () => {
  const auth = useAuth()

  if (auth && auth.userData) {

    return (
      <div>
      <p>
        Logged in as <b>{auth.userData.profile.email}</b>
      </p>
      <Button onClick={() => auth.signOut() && auth.signOutRedirect()} type='submit' variant='primary'>Sign Out</Button>
            </div>
    )
  }
  return (
    <div>Not logged in! Wait until you are redirected to LifeScience.</div>
  )
}

export default LoggedIn

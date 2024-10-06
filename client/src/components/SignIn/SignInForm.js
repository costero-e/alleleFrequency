
import LoggedIn from './LoggedIn'
import { useAuth } from 'oidc-react'

export default function SignInForm () {
  const auth = useAuth()
  const isAuthenticated = auth.userData?.id_token ? true : false

  if (!isAuthenticated) {
    auth.userManager?.signinRedirect()
  } 

  return (
    <div>
        <LoggedIn />
</div>
  )
}

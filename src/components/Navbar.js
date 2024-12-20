//imports
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

//styles
import styles from './Navbar.module.css'


export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>My Money</li>
      {!user && (
      <>
        <li><Link to="/login" key="login">Login</Link></li>
        <li><Link to="/signup" key="signup">Signup</Link></li>
      </>
    )}
    {user && (
        <>
        <li>hello, {user.displayName}</li>
        <li>
            <button className="btn" onClick={logout}>Logout</button>
        </li>
        </>
    )}
      </ul>
    </nav>
  )
}

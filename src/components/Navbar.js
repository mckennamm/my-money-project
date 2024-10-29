//imports
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { AuthContext } from '../context/AuthContext'  

//styles
import styles from './Navbar.module.css'


export default function Navbar() {
  const { logout } = useLogout()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>My Money</li>
        <li><Link to="/login" key="login">Login</Link></li>
        <li><Link to="/signup" key="signup">Signup</Link></li>


        <li>
            <button className="btn" onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}

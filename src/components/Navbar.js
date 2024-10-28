//imports
import { Link } from 'react-router-dom'

//styles
import styles from './Navbar.module.css'


export default function Navbar() {
  console.log('Rendering Navbar component')
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>My Money</li>
        <li><Link to="/login" key="login">Login</Link></li>
        <li><Link to="/signup" key="signup">Signup</Link></li>
      </ul>
    </nav>
  )
}

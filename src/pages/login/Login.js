//imports
import { useState } from 'react';

//styles
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className={styles['login-form']}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>

            <label>
                <span>password:</span>
                <input 
                    type="password" 
                />   
            </label>
            <button className="btn">Login</button>
            
        </form>
    )
}
//styles
import styles from './Signup.module.css';
//imports
import { useState } from 'react';

export default function Signup() {
    console.log('Rendering Signup component');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, displayName);  
    }

    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Sign Up</h2>
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
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}  
                />   
            </label>
            <label>
                <span>display name:</span>
                <input 
                    type="text" 
                    onChange={(e) => setDisplayName(e.target.value)} 
                    value={displayName}  
                />   
            </label>
            <button className="btn">Signup</button>
        </form>
    );
}
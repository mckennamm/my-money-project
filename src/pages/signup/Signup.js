//styles
import styles from './Signup.module.css'
//imports
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
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
            
            { error && <p>{error}</p> }
            { isPending && <button className="btn" disabled>Loading...</button> }
            { !isPending && <button className="btn">Signup</button> }


        </form>
    )
}
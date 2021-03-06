import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created new user w/ email and pw
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Logo'/>
            </Link>

            <div className='login__container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' placeholder=' example@mail.com' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' placeholder=' password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    Hello! You can either create a new account or use the demo account.
                </p>
                <p>
                    <strong>Email:</strong> testing@gmail.com 
                    <br/><strong>Password:</strong> abc123
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Clone Account</button>
            </div>
            <div className='line'> </div>
        </div>
    )
}

export default Login

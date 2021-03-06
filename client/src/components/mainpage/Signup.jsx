import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault()
            
            const userInfo = {
                username: username,
                email: email,
                password: password
            }
        }

    return (
        <div className="signUpAreaContainer">
                    <form id="signUpForm" onSubmit={handleSubmit}>
                        <div class="signUpContainer">
                        <h1 id="mainText">RelateD</h1>
                        <label id="usernameInputLabel" htmlFor='usernameInput'>Username</label>
                        <input id="usernameInput" type="text" placeholder="username" onChange={ e => setUsername(e.target.value)}></input>
                        
                        <label id="emailInputLabel" htmlFor='emailInput'>Email</label>
                        <input id="emailInput" type="email" placeholder="email" onChange={ e => setEmail(e.target.value)}></input>

                        <label id="passwordInputLabel" htmlFor='passwordInput'>Password</label>
                        <input id="passwordInput" type="password" placeholder="password" onChange={ e => setPassword(e.target.value)}></input>

                        <input id="signUpSubmitBtn" type="submit" value="Sign up"></input>
                        </div>
                        <h1 id="alreadyMsg">Already have an account? <Link id="alreadyLink" to='/login' >Sign in here</Link></h1>
                    </form>
                </div>
    )
}

export default SignUp
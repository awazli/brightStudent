import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import validator from "validator";

function Signup() {
    const navigate = useNavigate()

    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const handleSubmit = () => {
        console.log(email, password)
        // if (email.length==0 || password.length==0){
        //     setError(true)
        // }
        if (validator.isEmail(email)) {
            axios.post('http://localhost:5000/signup',
                {
                    firstname:firstname,
                    lastname:lastname,
                    username:username,
                    email: email,
                    password: password
                })
                .then(res => {
                    console.log(res.data)
                    if (res.data.code === 200) {
                        alert('Signup success.')
                    } else {
                        alert('Error.')
                    }
                    navigate('/signin')
                }).catch(err => {
                    console.log(err)
                })
        }
        else {
            setError(true)
            alert("Something is wrong")
        }

    }
    return (
        <>
            <div className="outer">
                <h1 className="center"> SIGNUP </h1>
                <div className="outcard">
                    Firstname  <br /><input
                        onChange={(e) => {
                            setFirstname(e.target.value)
                        }}
                        value={firstname}
                        className="inputs"
                        type="text" />
                    {error && email.length <= 0 ? <label>Email cant be empty</label> : ""}<br /> <br />
                    Lastname <br /><input
                        onChange={(e) => {
                            setLastname(e.target.value)
                        }}
                        value={lastname}
                        className="inputs"
                        type="text" />
                    {error && email.length <= 0 ? <label>Email cant be empty</label> : ""}<br /> <br />
                    Username  <br /><input
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        value={username}
                        className="inputs"
                        type="text" />
                    {error && email.length <= 0 ? <label>Email cant be empty</label> : ""}<br /> <br />
                    Email  <br /><input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                        className="inputs"
                        type="email" />
                    {error && email.length <= 0 ? <label>Email cant be empty</label> : ""}<br /> <br />
                    Password <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                        className="inputs" type="password" />
                    {error && password.length <= 0 ? <label>Password cant be empty</label> : ""}<br /> <br />




                    <button
                        onClick={handleSubmit}
                        className="btns">Submit</button>
                    <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                        to={'/signin'}> SIGN IN </Link>
                </div>
            </div>

        </>
    )
}

export default Signup
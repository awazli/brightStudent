import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

function AddTeachers() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
        axios.post('http://localhost:5000/addTeachers',
            {
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                password: password,
                role: "t"
            })
            .then(res => {
                console.log(res.data)
                // if (res.data.code === 200) {
                //     alert('Signup success.')
                // } else {
                //     alert('Error.')
                // }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className="outer">
                <h1 className="center"> Add teachers </h1>
                <div className="outcard">
                    Firstname  <br /><input
                        onChange={(e) => {
                            setFirstname(e.target.value)
                        }}
                        value={firstname}
                        className="inputs"
                        type="text" />
                    {/* {error && email.length <= 0 ? <label>Email cant be empty</label> : ""}<br /> <br /> */}
                    Lastname <br /><input
                        onChange={(e) => {
                            setLastname(e.target.value)
                        }}
                        value={lastname}
                        className="inputs"
                        type="text" />
                    {/* {error && email.length <= 0 ? <label>Email cant be empty</label> : ""}<br /> <br /> */}
                    Username  <br /><input
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        value={username}
                        className="inputs"
                        type="text" />
                    {/* {error && email.length <= 0 ? <label>Email cant be empty</label> : ""}<br /> <br /> */}
                    Email  <br /><input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                        className="inputs"
                        type="email" />
                    {/* {error && email.length <= 0 ? <label>Email cant be empty</label> : ""}<br /> <br /> */}
                    Password <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                        className="inputs" type="password" />
                    {/* {error && password.length <= 0 ? <label>Password cant be empty</label> : ""}<br /> <br /> */}

                    <button
                        onClick={handleSubmit}
                        className="btns">Add</button>
                    <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                        to={'/admin'}> Dashboard </Link>
                </div>
            </div>

        </>
    )
}

export default AddTeachers
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import validator from "validator";

function Contact() {
    const navigate = useNavigate()

    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')
    
    const handleSubmit = () => {
        console.log(email,query)
        // if (email.length==0 || password.length==0){
        //     setError(true)
        // }
        
            axios.post('http://localhost:5000/contact',
                {
                    name:name,
                    email:email,
                    query:query,
                    
                })
                .then(res => {
                    console.log(res.data)
                    if (res.data.code === 200) {
                        alert('Thanks')
                    } else {
                        alert('Error.')
                    }
                    navigate('/')
                }).catch(err => {
                    console.log(err)
                })
       

    }
    return (
        <>
            <div className="outer">
                <h1 className="center"> Contact </h1>
                <div className="outcard">
                    Firstname  <br /><input
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        value={name}
                        className="inputs"
                        type="text" /><br />
                    Email <br /><input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                        className="inputs"
                        type="text" /><br />
                    Query  <br /><input
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                        value={query}
                        className="inputs"
                        type="text"  />
                        
                   

<br/>

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

export default Contact
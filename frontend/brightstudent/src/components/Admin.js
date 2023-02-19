import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'



function Admin() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    }, [])
    return (<>
        
        <div className="card">
            Home I am admin
            <nav>
            <Link to={'/addTeachers'}>Add</Link>
            </nav>
            <span>{localStorage.getItem('EMAIL')}</span>
            <button
                onClick={() => {
                    localStorage.clear()
                    navigate('/signin')
                }}
            > LOGOUT </button>
            <button>Add Teachers</button>
        </div>
    </>

    )
}

export default Admin
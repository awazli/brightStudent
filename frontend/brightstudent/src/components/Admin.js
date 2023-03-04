import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Button } from "bootstrap";



function Admin() {

    const [idata, setData] = useState("")

    const navigate = useNavigate()


    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
        const fetchdata = async () => {
            const data = await axios.get("http://localhost:5000/details");

            setData(data.data.data)
        };
        fetchdata();
    },[])

    console.log(idata);

    const deleteuser = async (id) => {
        const result = await axios.delete("http://localhost:5000/deleteStudent/" + id)
            .then((result) => {
               alert("deleted")
              
               
            }).catch(() => {
                alert("Something wrong")
            })


    }





    // return (<>







    //     <div className="card">

    //         Home I am admin
    //         <nav>
    //             <Link to={'/addTeachers'}>Add</Link>
    //         </nav>
    //         <span>{localStorage.getItem('EMAIL')}</span>
    //         <button
    //             onClick={() => {
    //                 localStorage.clear()
    //                 navigate('/signin')
    //             }}
    //         > LOGOUT </button>
    //         <button>Add Teachers</button>
    //     </div>
    // </>

    // )

    return (<>

        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2">
                    <Link to={'/addTeachers'} className="btn btn-primary mt-3 mb-3">Add Teachers </Link>
                    <button onClick={() => {
                        localStorage.clear()
                        navigate('/signin')
                    }} className="btn btn-danger mt-3 mb-3 mx-5" >Log out</button>
                </div>
                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>

                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Object.values(idata).map(i => {
                            return (
                                <tr>
                                    <td>{i._id}</td>
                                    <td>{i.firstname}</td>
                                    <td>{i.lastname}</td>
                                    <td>{i.email}</td>
                                    <td>{i.username}</td>
                                    <td>
                                        <button onClick={() => deleteuser(i._id)} className="btn btn-danger">Delete</button>
                                        {/* <Link to={`/edit/${i._id}`} className="btn btn-primary mx-3">Update</Link> */}
                                    </td>
                                </tr>
                            )
                        }
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    </>)
}

export default Admin
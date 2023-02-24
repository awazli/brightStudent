// import { useEffect, useState } from "react"
// import axios from "axios"
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
// function Edit() {

//     const { id } = useParams();
//     const [idata, setData] = useState("")
//     const [student,setStudent] = useState({
//         'firstname':"",
//         'lastname':"",
//         'username':"",
//         'email':"",
//         'password':""
//     })
    


//     const navigate = useNavigate()
//     useEffect(() => {

//         const fetchdata = async () => {
//             const data = await axios.get("http://localhost:5000/edit/"+id);

//             setStudent(data.data)
            
//         };
//         fetchdata()

        
//     },[])
//     const handlechange = e =>{
//         setStudent({...idata,[e.target.name]:e.target.value})
//     }
   

//     console.log(idata);

//     const submitForm = async(e)=>{
//         e.preventDefault()
//         await axios.put("http://localhost:5000/editUser/"+id,student).then((result)=>{
//             alert("Updated")
//         }).catch((err)=>{
//             alert("Something went wrong")
//         })
//     }
    
//     return (
//         <>
//             <div className="outer">
//                 <h1 className="center"> Edit </h1>
//                 <div className="outcard">
//                     Firstname  <br /><input 
//                         onChange={(e) => {
//                             handlechange(e)
//                         }}
//                         value={student["firstname"]}
//                         className="inputs"
//                         name="firstname"
//                         type="text" />

//                     Lastname <br /><input
//                         onChange={(e) => {
//                             handlechange(e)
//                         }}
//                         value={student["lastname"]}
//                         className="inputs"
//                         name="lastname"
//                         type="text" />

//                     Username  <br /><input
//                         onChange={(e) => {
//                             handlechange(e)
//                         }}
//                         value={student["username"]}
//                         className="inputs"
//                         name="username"
//                         type="text" />

//                     Email  <br /><input
//                         onChange={(e) => {
//                             handlechange(e)
//                         }}
//                         value={student["email"]}
//                         className="inputs"
//                         name="email"
//                         type="email" />

//                     Password <input
//                         onChange={(e) => {
//                             handlechange(e)
//                         }}
//                         value={student["password"]}
//                         className="inputs"
//                         name="password"
//                          type="password" />
//                     <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
//                         to={'/admin'} onClick={submitForm}> Edit </Link>

//                 </div>
//             </div>

//         </>)
// }

// export default Edit
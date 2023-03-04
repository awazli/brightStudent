import { Button, Form } from 'react-bootstrap';
import { useState } from "react"
import axios from "axios"


// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';




function AddSubject() {

    const [title, setTitle] = useState('')
    const [stream, setStream] = useState('')
    const [address, setAddress] = useState('')

    const addCourses = () => {
        
        
            axios.post('http://localhost:5000/addCourse',
                {
                    title:title,
                    stream:stream,
                    address:address

                })
                .then(res => {
                    console.log(res.data)
                    if (res.data.code === 200) {
                        alert('Added')
                    } else {
                        alert('Error.')
                    }
                    
                }).catch(err => {
                    console.log(err)
                })
        
        

    }

    return (
        <>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="text" onChange={(e) => {
                            setTitle(e.target.value)
                        }} class="form-control" id="exampleFormControlInput1" placeholder="title" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Stream</label>
                <input type="text" onChange={(e) => {
                            setStream(e.target.value)
                        }} class="form-control" id="exampleFormControlInput1" placeholder="stream" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">File</label>
                <input type="file" onChange={(e) => {
                            setAddress(e.target.value.slice(12,-4))
                        }}  class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>

            <Button className='btn-danger btn-large' onClick={addCourses}>Add</Button>


        </>

    );

}

export default AddSubject
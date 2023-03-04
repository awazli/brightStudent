import { Link, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react"
import axios from "axios"




function Home() {
    const navigate = useNavigate()
    const [idata, setData] = useState("")
    const[iaddress , setAddress] = useState("")
    

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
        const fetchdata = async () => {
            const data = await axios.get("http://localhost:5000/addedCourses");
            console.log(data.data.data);

            setData(data.data.data)
            setAddress(data.data.data.address)
        };
        fetchdata();
    },[])
    
    return (<>
        Home <br />
        <span>{localStorage.getItem('EMAIL')}</span>
        <button
            onClick={() => {
                localStorage.clear()
                navigate('/signin')
            }}
        > LOGOUT </button>

        

        {Object.values(idata).map(i => {
           
            console.log(i.address);
            
            return (<>
                
                
                
                <Card style={{ width: '18rem' }}>
                    <img src = {`${i.address}.png`} />
                    <Card.Body>
                        <Card.Title>{i.title}</Card.Title>
                        <Card.Text>
                            {i.stream}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                
                </>

            )
        }
        )}




    </>

    )
}

export default Home
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'



// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';


function Teacher() {
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div class="card">

                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Link to = {'/AddSubject'} className='btn-danger btn-large'>Add Subject</Link>


        </>

    );

}

export default Teacher
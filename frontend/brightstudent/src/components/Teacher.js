import { Button, Form } from 'react-bootstrap';


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
            <Button className='btn-danger btn-large'></Button>


        </>

    );

}

export default Teacher
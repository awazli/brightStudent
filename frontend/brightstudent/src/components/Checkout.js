import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import { Button } from "bootstrap";

import StripeCheckout from 'react-stripe-checkout';
import { Col, Row } from "react-bootstrap";

function Checkout() {
  
  const onToken = (token, addresses) => {
    console.log(token, addresses);
  };

  return (
    <Row className="col-8" style={{marginLeft: 200, marginTop: 50}}>
      <Col className="col-12">
      <Card>
        <h3>You can select monthly and yearly subscription</h3>
        <p>Please checkout:</p>
        <StripeCheckout 
          stripeKey="pk_test_m9Dp6uaJcynCkZNTNS1nDR8B00AQg2m6vJ"
          token={onToken}
        />
      </Card>
      </Col>
    </Row>
  );
}

export default Checkout
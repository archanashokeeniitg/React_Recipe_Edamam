import React from 'react'
import {Card, CardBody, CardHeader,Row,Col } from 'reactstrap'
const Cards =({title ,calories,image,ingredients}) => {
    console.log("recipss sis")
    return(

 <Card>
 <CardHeader>Title:{title}</CardHeader>
 <CardBody>
 <img src= {image}/>
 <Row>
 <Col lg='6'>
 <p> Calories:{calories}</p>
 <p> Ingredients:</p>
 <p>{ingredients}</p>
 </Col>

 </Row>

 

  </CardBody>
  </Card>
      
  
    )
}
export default Cards;
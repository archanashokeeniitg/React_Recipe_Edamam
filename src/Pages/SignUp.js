import React, { useContext,useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Form,FormGroup, Button, Card, CardBody, Input, Label,Row,Col, Container, CardHeader} from "reactstrap"
import firebase from 'firebase/app'
import {toast} from "react-toastify"
import {UserContext} from "../Context/UserContext"

const SignUp = () => {
    const Context = useContext(UserContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

const createUser = () =>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then(
        res=>{
            console.log(res)
            toast("user Created!!!",{type:"success"})
            Context.setUser({email:res.user.email ,uid: res.user.uid})

        }

    )
    .catch( error=>{
            console.log("error",error)
            toast(error.message,{type:"error"})
        }
    )

}

const handleSubmit = e =>{
    e.preventDefault();
    createUser()
    console.log(" submitteddd formm" )
}

    return(
        <Container fluid >
        <Row >
        <Col lg={6}>
        <Card >
       
        <Form onSubmit={handleSubmit}>
        <CardHeader className="bg-warning"> SignUp here</CardHeader>
        <CardBody>
  
       <FormGroup row>
       <Label>Email</Label> 
       <Col>
       <Input type="text" placeholder ="enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
       </Col>
       </FormGroup>
       <FormGroup row>
       <Label>Password</Label>
       <Col>
       <Input type="text" placeholder ="enter Password" value={password} onChange={e=>setPassword(e.target.value)}/>
       </Col>
       </FormGroup>
       <Button type="submit" className="bg-info">
       Submit

       </Button>
       </CardBody>
      
       </Form>
       </Card>
       </Col>
       </Row>
       </Container>    
    )
}
export default SignUp
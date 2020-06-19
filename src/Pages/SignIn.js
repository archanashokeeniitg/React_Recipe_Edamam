import React, { useContext,useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Form,FormGroup, Button, Card, CardBody, Input, Label,Row,Col, Container, CardHeader} from "reactstrap"
import firebase from 'firebase/app'
import { toast } from "react-toastify"
import {UserContext} from "../Context/UserContext"
import {Redirect} from "react-router-dom"

const SignIn = () => {
    const Context = useContext(UserContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

const userSignedIn = () =>{
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(
        res=>{
            console.log(res)
            toast("user Signed In!!!",{type:"success"})
            Context.setUser({email:res.user.email ,uid: res.user.uid})

        }

    )
    .catch(
        error=>{
            console.log("error",error)
            toast(error.message,{type:"error"})
        }
    )

}


const handleSubmit = e =>{
    e.preventDefault();
    userSignedIn()
    console.log(" submitteddd formm" )
}
if (Context.user?.uid){
    console.log(",user foumnd!!!!!",Context)
    return <Redirect  to ="/"/>
}

    return(
        <Container fluid >
        <Row >
        <Col lg={6}>
        <Card >
       
        <Form onSubmit={handleSubmit}>
        <CardHeader className="bg-warning"> SignIn here</CardHeader>
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
       <Button className="bg-info">
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
export default SignIn
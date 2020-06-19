import React,{useState} from "react"
import { Container, FormGroup ,Row , Form, Col, InputGroup,Input, Button, InputGroupAddon } from "reactstrap"
import Axios from "axios"
import { toast } from "react-toastify"
import Cards from "../Components/Cards"
const Home = () =>{

    const YOUR_APP_ID = '6ac6b655'
    const YOUR_APP_KEY = '6eb94dbf44f660ea268ed84f30fcccbb'

    const [query,setQuery] =useState('')
    const [recipes,setRecipes] = useState([])

const fetchRecipe = async() => {
    try{
        const {data} = await Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
        console.log("wowowowoowow",{data})
        console.log("wowowowoo2222",data.hits)
        setRecipes(data.hits)
        console.log("recipes:::::", recipes)


    }catch(error){
        toast(error.message,{
            type:"error"
        })

    }
}


    return(
        <Container fluid>
        <h1 className="bg-warning">
         Recipe Search Platform
        </h1>
        <Row className="mt-3">
        <Col lg="5">
        <InputGroup>
        <Input type="text" placeholder="search Recipe Here" value={query} onChange ={e=> setQuery(e.target.value)}/>
        <InputGroupAddon addonType="append">
        <Button color="primary" onClick={fetchRecipe} >
        Search
        </Button>
        </InputGroupAddon> 
        </InputGroup>
        </Col>
        {recipes.map (recipe=> (<Cards  
            title = {recipe.recipe.label} 
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredientLines}
            />) )}
             <Cards recipes />
        
        </Row>
        </Container>
    )

}
export default Home
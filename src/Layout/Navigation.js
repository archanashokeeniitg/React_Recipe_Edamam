import React, { useContext} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar,NavItem,Nav,NavbarBrand,NavLink,NavbarText} from "reactstrap"
import {Link} from "react-router-dom"
import {UserContext} from "../Context/UserContext"
 
const Navigation =  () =>{
    const Context= useContext(UserContext)
    return(
    <nav className="bg-info text-white ">
    <Navbar>
    <NavbarBrand>
    <NavLink  tag= {Link} to="/" className= "text-white"> Food Recipe Search  </NavLink>
    </NavbarBrand>

    {Context.user ?
    (
        <NavItem>
    <NavLink  tag= {Link} to="/signup" className= "text-white" onClick={()=>{Context.setUser(null)}}>Logout </NavLink>
    </NavItem> 

    ):(
        <>
        <NavItem >
    <NavLink  tag={Link} to ="/signup" className= "text-white" > SignUp</NavLink>
    </NavItem>
    <NavItem>
    <NavLink  tag= {Link} to="/signin" className= "text-white">SignIn </NavLink>
    </NavItem>
    </>

    )
}
    
    
    </Navbar>
    </nav>
    )

}

export default Navigation
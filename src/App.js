import React ,{useState,useContext} from 'react';
import './App.css';
import  'react-toastify/dist/ReactToastify.css'
//import pages
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
//import Layout
import Navigation from './Layout/Navigation'
import Footer from './Layout/Footer'

//import dependencies
import  {BrowserRouter as Router ,Switch, Route} from "react-router-dom"
import {UserContext} from "./Context/UserContext"

//import firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseConfig from './Firebase/FirebaseConfig'
import { ToastContainer } from 'react-toastify';

firebase.initializeApp(FirebaseConfig)

function App() {
   const[user,setUser] = useState(null)
  return ( 
    <div className="App">
    <ToastContainer />
    <UserContext.Provider value={{user,setUser}}>

    <Router>
    <Navigation />
    <Switch>
    <Route exact path="/"  component={Home}/>
    <Route exact path="/signin"  component={SignIn}/>
    <Route exact path="/signup"  component={SignUp}/>
    <Route exact path='*'  component={PageNotFound}/>

    </Switch>

    <Footer />  

   
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;

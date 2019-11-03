import React,{Component} from 'react';
import Navbar from './Components/navbar';
import MainPage from './Components/mainPage';
//import 'bootstrap'
// import {BrowserRouter} from 'react-router-dom'

class App extends Component{
    render(){
        return (
        <React.Fragment>
         <Navbar/>
         <MainPage/>
         </React.Fragment>
        )
    }
}
export default App;
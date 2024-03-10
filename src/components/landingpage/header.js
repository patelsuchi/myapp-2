import React, { Component } from 'react';
import "./style.css";


// class Navbar extends component {

//     state = { clicked: false };
//     render (){
//     return (

class Navbar extends Component {
    state = { clicked: false };
    handClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render() {
      return (
      
        <nav>
            <img className='logo' src='logo.png'></img>
       

       <div>
        <ul id = "navbar" className= {this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><a className="active" 
            href = "#">Home</a></li>
            <li><a href = "#">Home</a></li>
            <li><a href = "#">Home</a></li>
            <li><a href = "#">Home</a></li>
            <li><a href = "#">Home</a></li>
        </ul>
        </div>

        <div id= "mobile" onClick={this.handClick}>
        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        

        </div>
        </nav>



// 
    
    );
    <div>
        
    </div>
  }
}

  export default Navbar;
  
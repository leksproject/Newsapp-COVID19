import React, { Component } from 'react'

import PropTypes from 'prop-types'

function ShowMenu(props){
  return(
    <div>
    <button onClick= {props.onClick}/>
    
            <ul>
              <li><a className="active" href="#US">US</a></li>
              <li><a href="#US">France</a></li>

              <li><a href="#US">Italy</a></li>
          
            </ul>
            </div>


  )
}


//Component to select the drop down options - reactjs, frontend, vuejs
export default class Selector extends Component {

  constructor(){
  super();

  this.state = {
    displayMenu : false
  }

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
}

showDropdownMenu(event){

  this.setState ({
    displayMenu : true
  }, () =>
  {console.log("Inside displayMenu");})
  event.preventDefault();

}
hideDropdownMenu(event){

  this.setState ({
    displayMenu : false
  }, () => {
    console.log("hideMenu");
  })
  event.preventDefault();

}



  render() {
    const Menustatus = this.state.displayMenu;

    console.log("MenuStatus",Menustatus);

    let button;

    if(Menustatus){
      button = <ShowMenu onClick={this.showDropdownMenu}/>
    }
    else{
      button = <ShowMenu onClick={this.hideDropdownMenu}/>
    }
    return(
      <div className="row">
        <div className="button " onClick={this.showDropdownMenu}>
          Country </div>
          <div className="dropdown">

            {button}
              
          );
         
        </div>
      </div>
     
    )
    
}
//Selector props being set using the value selected
}

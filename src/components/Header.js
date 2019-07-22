import React from 'react';
import {Link} from 'react-router';


class Header extends React.Component {

constructor (){
  super();

  this.state = {
    isNavOpen : false
  }
}

buttonClicked() {
 //console.log("CLİCKED");
 //console.log("this" , this);
   this.setState({
     isNavOpen : !this.state.isNavOpen //true false- false true yapar
  })   
}


  render (){ 
        console.log("RENDERLİNG");
     return (

    <header>
       <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
       <a className="navbar-brand" href="#">BaşlangıçNoktası</a>

       <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
         <span className="navbar-toggler-icon"></span>
       </button>
    
       <div className="navbar-collapse" style={{display:this.state.isNavOpen ? "block" : "none" }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-link">Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link to="/hakkimizda" activeClassName="active" className="nav-link">About us</Link>
            </li>
            <li className="nav-item">
               <Link to="/contact" activeClassName="active" className="nav-link">Contact</Link>
            </li>
         </ul>
         </div>
       </nav>
     </header>

    )
 
  }

}
export default Header;
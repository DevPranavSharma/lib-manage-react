import React ,{Component} from 'react';
class Navbar extends Component{
    render(){
        return (
            <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <a className="navbar-brand" href="http://www.google.com">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="http://www.google.com">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://www.google.com">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://www.google.com">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="http://www.google.com" tabIndex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
            </React.Fragment>
            )
        }
    }
    
export default Navbar;
import React ,{useState}from 'react'
import logo from "../images/graduation.png";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import TocIcon from '@mui/icons-material/Toc';

function Navbar() {
  const [openLinks, setOpenLinks ] = useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  };
  return (
    <div className='navbar'>
      <div className='leftSide'id={openLinks ? "open" : "close"}>
        
        {/* <img src={logo}/>  */}
        <h3>FundYour<span>Future</span></h3>
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        {/* <Link to="/menu">Menu</Link> */}
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
     
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        {/* <Link to="/menu">Menu</Link> */}
        <Link to="/contact">Contact</Link>
        
        
        <button onClick={toggleNavbar}>
            <TocIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar

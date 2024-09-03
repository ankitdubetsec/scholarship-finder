import React from 'react';
import HomeImg from '../images/scholar1.png';
import BannerImage from '../images/homebg.jpg';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Tracking from '../images/scholarship.png'
import University from "../images/university.png"
import Footer from '../components/Footer';


function Home() {
  return (
    <div className='main-section'>
      <div className='home'>
        <div className='headerContainer'>
          <div className='headerText'>
            <h1>Scholar's</h1>
            <br></br>
            <p>Find the right scholarship for you!</p>
            <h6 style={{ 'color': 'black' }}>Navigate the sea of scholarships effortlessly with our app, <br />matching your ambitions with the perfect financial support for your education.<br /> Discover opportunities that pave the way to your academic dreams</h6>
          </div>
          <div className='buttons'>
            <Link to='/login'>
              <button>Log In</button>
            </Link>
            <Link to='/register'>
              <button className='registerButton'>Register</button>
            </Link>
            <Link to="/Adminlogin"> <button className='registerButton'>Admin</button></Link>
            
          </div>
        </div>

        <div style={{'width': '400px', 'height': '400px', 'marginRight': '60px'}} className='img'>
          <img  src={HomeImg} alt='Scholarship' />
        </div>
      </div>
      <div className='features-section'>
        <br></br>
        <br></br>
        <h1 style={{ "fontSize": '45px', "marginLeft": '30px' }}>Why choose us?</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div className='features-grid'>
          <div className='feature'>
            <img className="feature1" src={Tracking}></img>
          </div>
          <div className='feature'>
            <h2 style={{ "fontWeight": '600' }}>Personalised Recommendation</h2>
            <p>We provide recommendations depending on your field of choice !</p>
          </div>
          <div className='feature'>
            <img className="feature1" src={University}></img>
          </div>
          <div className='feature'>
            <h2 style={{ "fontWeight": '600' }}>Best Universities</h2>
            <p>Scholarships from the best universities</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>

  );
}

export default Home;

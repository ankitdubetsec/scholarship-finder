import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <InstagramIcon/><TwitterIcon/><FacebookIcon/><LinkedInIcon/>
      </div>
      <p> &copy; 2023 Team Port 8080</p>
    </div>
  );
}

export default Footer;

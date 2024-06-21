import React from "react";
import "./Footer.css";
import facebookIcon from "../../assets/facebook_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import youtubeIcon from "../../assets/youtube_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <div className="list-items">
        <ul>
          <li>Audio Description</li>
          <li>Help center</li>
          <li>Gift Cards</li>
          <li> Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="copy-right">&copy; 1997-2024 Netflix, Inc.</div>
    </div>
  );
};

export default Footer;

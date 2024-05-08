import React from "react";
import "./Footer.scss";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
  const email = process.env.REACT_APP_EMAIL;

  return (
    <div className="footer">
      <div className="footer-top">
        <span className="footer-top_left">
          <h1 className="footer-top_left-title">Get in Touch</h1>
          <p className="footer-top_left-description">
            Reach out to me for collaboration opportunities or to discuss your
            project ideas!
          </p>
          <div className="footer-top_left-contact">
            <a href='https://www.linkedin.com/in/langletlouis/' rel="noreferrer" target='_blank'>
              {" "}
              <IoLogoLinkedin className="left_img" />
            </a>
            <a href='https://www.youtube.com/channel/UCBUFjjs68EyW33zhzNs2Y1A' rel="noreferrer" target='_blank'>
            <IoLogoYoutube className="left_img" />
            </a>
          </div>
        </span>
        <span className="footer-top_right">
          <a href ={process.env.PUBLIC_URL + '/resume.pdf'} rel="noreferrer" target='_blank'>
          <div className="footer-top_right-resume">
            <IoDocumentAttachOutline className="right_img" />
            <p>download my resume</p>
          </div>
          </a>
          <a href={`mailto:${email}`}>
          <div className="footer-top_right-email">
            <IoMailOutline className="right_img" />
            <p>send me an email</p>
          </div>
          </a>
        </span>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Louis' Portfolio</p>
        <div className="footer-bottom_credits">
          <p>Created by</p>
          <a href='https://github.com/lucillealvar' rel="noreferrer" target='_blank'>
          <p className="credit-name">Lucille Alvar</p>
          </a>
          <p>& Designed by</p>
          <p className="credit-name">Louis Langlet</p>
        </div>
        <p>All trademarks used are the property of their respective owners.</p>
      </div>
    </div>
  );
}

export default Footer;

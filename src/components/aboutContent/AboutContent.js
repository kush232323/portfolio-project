import React from "react";
import "./aboutContent.css";
import { Link } from 'react-router-dom';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who AM I?</h1>
        <p>I'm a React front-end developer. I create responsive and secure websites for my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
<div className="img-container">
  <div className="img-stack top">
    <img src="https://cdn.dribbble.com/users/9548/screenshots/15270888/media/d458b9ef57750442b5251b0b6a4406d9.png?resize=1000x750&vertical=center" className="img"
     alt="true"/>
  </div>
  <div className="img-stack bottom">
    <img src="https://cdn.dribbble.com/users/327999/screenshots/16437678/media/b96991b752847cf4fd89766879d56572.png?resize=1000x750&vertical=center" className="img"
     alt="true"/>
  </div>
</div>
      </div>
    </div>
  );
};

export default AboutContent;

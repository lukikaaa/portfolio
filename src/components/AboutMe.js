import React from "react";
import "./AboutMe.css";
import { FaUniversity, FaSchool } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h2>About Me</h2>
        <p>
          I'm an ordinary person who was born and raised ordinary. I've been
          living an ordinary life for the past 25 years, but behind my ordinary
          responses and actions, I have the determination to improve my
          abilities in both knowledge and skills. So, at the start of 2023 I
          started studying at the Open University, majoring in Information
          Systems. After almost five years since I graduated from high school in
          2018, I’m hoping that studying at the Open University will help me to
          gain more knowledge and insight that will be useful in current and
          future jobs.
        </p>

        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <FaUniversity className="icon" />
              <div>
                <strong>Open University</strong>
                <span> - Bachelor of Information Systems (2023-present)</span>
              </div>
            </li>
            <li>
              <FaSchool className="icon" />
              <div>
                <strong>SMA Negeri 1 Pejagoan</strong>
                <span> - Social Sciences Major (2015-2018)</span>
              </div>
            </li>
            <li>
              <FaSchool className="icon" />
              <div>
                <strong>SMP Negeri 7 Kebumen</strong>
                <span> (2012-2015)</span>
              </div>
            </li>
            <li>
              <FaSchool className="icon" />
              <div>
                <strong>SD Negeri 2 Kebadongan</strong>
                <span> (2006-2012)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



import React, { useState } from 'react';

const About = ({ firstName, lastName, image, addressUser, nationalityUser, phoneNumber, email, skills, timeline }) => {
  const [animationClass, setAnimationClass] = useState('fade-in-up');

  // Function to change the animation class
  const changeAnimationClass = () => {
    setAnimationClass('fade-in-down');
  };

  // console.log({firstName , lastName})
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src={image} alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {firstName}
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {lastName}
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>27 Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nationality :</span>
                    <span>{nationalityUser}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Languages :</span>
                    <span>English</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>{addressUser}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Phone :</span>
                    <span>{phoneNumber}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>{email}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Skype :</span>
                    <span>{firstName.toLowerCase()}.{lastName}</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}


      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className={`animated-layer fade-in-down-animation fadeInLeft wow`} >
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}

        <div className="skills-content">

          {Array.isArray(skills) && skills.map((skill, index) => (
            <div key={index} className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <img className="devicon-wordpress-plain" style={{ width: "90px", height: "90px" }} src={skill.image.url} alt={skill.name} />
              </span>
              <h4>{skill.name}</h4>
            </div>
          ))}


        </div>
      </div>
      {/* SKILLS ENDS */}

      {/* TIMELINE STARTS */}
      <div className="timeline">
        <ol className="animated-layer fade-in-animation">
          {/* Check if timeline is an array before mapping */}
          {Array.isArray(timeline) && timeline.map((item, index) => (
            <li key={index}>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>{item.jobTitle}</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>{new Date(item.startDate).getFullYear()} - {new Date(item.endDate).getFullYear()}</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>{item.company_name}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      {/* TIMELINE ENDS */}



      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};

export default About;

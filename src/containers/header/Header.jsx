import React from 'react';
import people from '../../assets/people.png';

import huawei3 from '../../assets/huawei3.svg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Hi I&apos;m Edwin Perez Aguilar a Solution Architect</h1>
      <p>I am a disciplined person who has participated in electrical-electronics projects focused on embedded systems and serial communications. Applying my experience, knowlegde and skills commited to excellence, seeking to contribute to the succes of the projects where I participate and always learning from the feedback to develop my profesional growth.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={huawei3} />
    </div>
  </div>
);

export default Header;

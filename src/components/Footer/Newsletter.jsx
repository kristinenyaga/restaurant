import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
const Newsletter = () => (
  <div className="app__newsLetter">
    <div className='app__newsLetter-heading'>
      <SubHeading title="NewsLetter" />
      <h1 className='headtext__cormorant'>Subscribe To Our NewsLetter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
      <div className='flex__center app__newsLetter-input'>
        <input type="email" placeholder='enter your email address' />
        <button className="custom__button">Subscribe</button>

      </div>

    </div>
  </div>
);

export default Newsletter;

import React from 'react';


import { images } from '../../constants';
import {SubHeading} from '../../components'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Chase the new flavor'/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quo. Soluta animi dolorum perferendis voluptatum ducimus quos! Rerum id et voluptatum eligendi neque laudantium, natus numquam omnis rem nam in!</p>
      <button type='button' className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;

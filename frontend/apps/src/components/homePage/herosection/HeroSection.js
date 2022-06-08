import React from 'react';
import { Button } from '../../button/Button';
import './herosection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mov' autoPlay loop muted />
      <h1>WONDERFUL INDONESIA</h1>
      <p>One day traveling in Indonesia place</p>
      <div className='hero-btnsg'>
        <Button
          className='btnsg'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

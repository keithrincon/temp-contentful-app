import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            sint. Inventore reprehenderit voluptatem, fuga voluptate ea animi
            laboriosam et impedit exercitationem itaque nisi minus consequatur
            tempore dolores. Reprehenderit, maiores cupiditate.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='womean and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

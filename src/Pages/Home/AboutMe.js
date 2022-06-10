import React from 'react';

const AboutMe = () => {
  return (
    <div className='hero min-h-[70vh]'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src='https://api.lorem.space/image/movie?w=260&h=400' className='max-w-sm rounded-lg shadow-2xl' alt='' />
        <div className='ml-16'>
          <h1 className='text-5xl font-bold'>Box Office News!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

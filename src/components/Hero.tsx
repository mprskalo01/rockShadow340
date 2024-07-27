import React from "react";

const Hero: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh] mx-6 mt-4 mb-2'>
      <div className='text-center'>
        <h1 className='title'>Developing the Front-End</h1>
      </div>
      <div className='text-center'>
        <h2 className='subtitle'>with a sprinkle of Back-End</h2>
      </div>
    </div>
  );
};

export default Hero;

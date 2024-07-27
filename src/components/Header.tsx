import React from "react";
// import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className='top-0 h-16 sticky z-50 mx-auto w-4/6 max-w-screen-lg bg-zinc-800'>
      <div className='h-full container mx-5 flex justify-between items-center border-gradient'>
        <div className='text-4xl font-bold'>
          <h1 className='header-main'>Mario</h1>
        </div>
        {/* <nav>
          <ul className='flex space-x-4'>
            <li>
              <h2 className='header-link'>Home</h2>
            </li>
            <li>
              <h2 className='header-link'>About</h2>
            </li>
            <li>
              <h2 className='header-link'>Projects</h2>
            </li>
            <li>
              <h2 className='header-link'>Contact</h2>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Footer from '../Footer';
import { NavBar } from '../NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-full '>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

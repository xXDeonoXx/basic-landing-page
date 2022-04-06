import React, { useEffect, useState } from 'react';

export const NavBar = () => {
  const [onTop, setOnTop] = useState(true);
  const links = [
    { label: 'Home', url: '' },
    { label: 'Overview', url: '' },
    { label: 'Showcase', url: '' },
    { label: 'Team', url: '' },
    { label: 'Subscribe', url: '' },
  ];

  const onScroll = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav
      className={`${!onTop && 'bg-black bg-opacity-60'}
    h-20 w-full flex items-center justify-between px-8 fixed transition-all delay-100 duration-300 z-40
    `}
    >
      <img
        src='https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ'
        alt='Logo'
        className='h-16'
      />
      <div className='text-white flex'>
        {links.map((link, index) => {
          return (
            <a
              className={`${index !== links.length - 1 && 'mr-8'}`}
              href={link.url}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

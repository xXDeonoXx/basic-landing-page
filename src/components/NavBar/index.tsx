import React, { useEffect, useState } from 'react';
import MenuIcon from '../../images/icons/menu.svg';

export const NavBar = () => {
  const [onTop, setOnTop] = useState(true);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const links = [
    { label: 'Início', url: '#início' },
    { label: 'Sobre', url: '#sobre' },
    { label: 'Seção 1', url: '#seção-1' },
    { label: 'Serviços', url: '#serviços' },
    { label: 'Seção 2', url: '#seção-2' },
    { label: 'Se inscreva', url: '#se-inscreva' },
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
    h-20 w-full flex items-center justify-between px-4 md:px-8 fixed transition-all delay-100 duration-300 z-40
    `}
    >
      <img
        src='https://placeholderlogo.com/img/placeholder-logo-4.png'
        alt='Logo'
        className='h-16'
      />
      <div
        className={`p-2 block md:hidden`}
        onClick={() => {
          setShowSideMenu(true);
        }}
      >
        <img src={MenuIcon} alt='' className='h-8 text-white fill-white' />
      </div>
      <div className='text-white hidden md:flex'>
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
      <div
        className={`${
          !showSideMenu ? 'w-0 delay-100' : 'w-full'
        } block md:hidden  absolute transition-all duration-100 w-full h-screen inset-0 overflow-hidden`}
      >
        <div className=' bg-slate-100 inset-0 w-2/3 h-screen absolute delay-500 z-10 flex flex-col'>
          {links.map((link, index) => {
            return (
              <a
                className={`${
                  index !== links.length - 1 && 'mr-8'
                } w-full border p-2`}
                href={link.url}
                onClick={() => {
                  setShowSideMenu(false);
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <div
          onClick={() => {
            setShowSideMenu(false);
          }}
          className={`${
            !showSideMenu ? 'opacity-0' : 'opacity-100 delay-100'
          } w-full h-full bg-black bg-opacity-50 z-50 transition-all duration-100 `}
        />
      </div>
    </nav>
  );
};

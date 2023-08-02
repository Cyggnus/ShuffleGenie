import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsRotate,
  faRightFromBracket,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AppContext from '../../../Context/AppContext';
import { confirmAlert, handleSync } from '../handleSync';

const NavMobile: React.FC = () => {
  const { t } = useTranslation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    lastCalledTime,
    needSync,
    setCardsNum,
    setCollection,
    setIsLoading,
    setLCT,
    username,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsLoading(true);
    handleSync(
      setIsButtonDisabled,
      setLCT,
      lastCalledTime,
      setCardsNum,
      setCollection,
      setIsLoading,
      username,
      navigate
    );
    handleLinkClick();
  };

  const dispatchConfirmAlert = () => {
    confirmAlert(navigate);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <nav className={`${isOpen ? 'navBar fixed z-50' : 'navBar'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 relative'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <Link
              to='/'
              onClick={handleLinkClick}
              title={t('nav.btnTitle.home')}
              className='navLink'>
              <h1 className='text-white text-3xl font-bold'>ShuffleGenie</h1>
            </Link>
          </div>
          <button
            className='hamburger-btn text-white navLink'
            type='button'
            title={t('nav.btnTitle.hamburgerMenu')}
            aria-label='navbar hamburger menu'
            onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={faBars}
              size='2xl'
              style={{ color: '#9b51e0' }}
            />
          </button>
          <div
            id='hamburger-items'
            className={`${
              isOpen
                ? 'flex flex-col items-start space-y-7 pt-12 fixed top-20 right-0 bg-violet-1 w-full h-screen shadow-md z-50'
                : 'hidden'
            }`}>
            <div className='w-full'>
              <Link
                to='/'
                title={t('nav.btnTitle.home')}
                className='navLink block w-full'
                onClick={handleLinkClick}>
                {t('nav.link.home')}
              </Link>
            </div>
            <div className='w-full'>
              <Link
                to='/help'
                title={t('nav.btnTitle.help')}
                className='navLink block w-full'
                onClick={handleLinkClick}>
                {t('nav.link.help')}
              </Link>
            </div>
            <div className='w-full'>
              <Link
                to='/about'
                title={t('nav.btnTitle.about')}
                className='navLink block w-full'
                onClick={handleLinkClick}>
                {t('nav.link.about')}
              </Link>
            </div>
            {!needSync && (
              <div className='w-full'>
                <button
                  type='button'
                  onClick={handleClick}
                  disabled={isButtonDisabled}
                  title={t('nav.btnTitle.sync')}
                  className='navLink block w-full'>
                  {t('nav.link.sync')}
                  <FontAwesomeIcon
                    className='pl-2'
                    size='sm'
                    icon={faArrowsRotate}
                  />
                </button>
              </div>
            )}
            {!needSync && (
              <div className='w-full'>
                <button
                  type='button'
                  title={t('nav.btnTitle.profile')}
                  onClick={() => {
                    navigate('/profile');
                    handleLinkClick();
                  }}
                  className='navLink block w-full'>
                  {t('nav.link.profile')}
                </button>
              </div>
            )}
            {!needSync && (
              <div className='w-full'>
                <button
                  type='button'
                  title={t('nav.btnTitle.logout')}
                  onClick={() => {
                    dispatchConfirmAlert();
                    handleLinkClick();
                  }}
                  className='navLink block w-full'>
                  {t('nav.btnTitle.logout')}
                  <FontAwesomeIcon
                    className='pl-2'
                    size='sm'
                    icon={faRightFromBracket}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;

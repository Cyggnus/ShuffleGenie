import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import SyncForm from '../../Components/SyncForm';

function Help() {
  const { needSync } = useContext(AppContext);

  return (
    <section className='flex justify-around bg-gray-1 h-screen'>
      <div className='flex flex-col justify-center itens-center'>
        <p className='defaultPageText'>
          To Sync Your Collection you will need a{' '}
          <a
            href='https://marvelsnapzone.com/login/'
            target='_blank'
            rel='noopener noreferrer'>
            MarvelSnapZone
          </a>{' '}
          account.
        </p>
        <p className='defaultPageText'>
          To use your collection provide your{' '}
          <a
            href='https://marvelsnapzone.com/users/'
            target='_blank'
            rel='noopener noreferrer'>
            MarvelSnapZone
          </a>{' '}
          username bellow then click on &apos;Sync your collection&apos;.
        </p>
        {needSync && (
          <div className='flex justify-center itens-center'>
            <SyncForm />
          </div>
        )}
      </div>
    </section>
  );
}

export default Help;

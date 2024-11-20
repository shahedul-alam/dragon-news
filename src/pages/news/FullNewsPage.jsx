import React from 'react';
import News from './News';
import HomeRightAside from '../home/HomeRightAside';

const FullNewsPage = () => {
  return (
    <main className="container mx-auto grid grid-cols-12 gap-6 mb-20">
      <News />
      <HomeRightAside />
    </main>
  );
};

export default FullNewsPage;
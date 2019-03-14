import React from 'react';

import style from './styles/home';

const Home = props => {
  const { toPortfolio, toAbout, themeStyle=style } = props;

  return (
    <section className={themeStyle}>
      <h1>alex christie</h1>
      <h1 className={'title'}>front end developer</h1>
      <h2>i'm passionate about building elegant, responsive, and speedy front ends. check out some of my projects.</h2>
      <div>
        <button onClick={toPortfolio}>my work</button>
        <button onClick={toAbout}>about</button>
      </div>
    </section>
  );
};

export default Home;

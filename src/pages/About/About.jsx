import React from 'react';
import { Finsweet } from '../../components/Finsweet/Finsweet';
import { AboutHeaderBottom } from '../../components/Header/AboutHeaderBottom/AboutHeaderBottom';
import { Header } from '../../components/Header/Header';
import { OurTeam } from '../../components/OurTeam/OurTeam';

export const About = () => {
  return (
    <>
      <Header HeaderBottom={AboutHeaderBottom} />
      <main>
        <Finsweet />
        <OurTeam />
      </main>
    </>
  );
};

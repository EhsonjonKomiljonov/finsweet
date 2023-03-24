import React from 'react';
import { Analytics } from '../../components/Analytics/Analytics';
import { Customer } from '../../components/Customer/Customer';
import { Header } from '../../components/Header/Header';
import { HeaderBottom } from '../../components/Header/HeaderHomeBottom/HeaderHomeBottom';
import { HomeHero } from '../../components/HomeHero/HomeHero';
import { Questions } from '../../components/Questions/Questions';
import { HappyTeam } from '../../components/TeamHappy/TeamHappy';

export const Home = () => {
  return (
    <>
      <Header HeaderBottom={HeaderBottom} />
      <main>
        <HomeHero />
        <HappyTeam />
        <Analytics />
        <Customer />
        <Questions />
      </main>
    </>
  );
};

import React from 'react';
import Header from '../components/Header';
import TopDoctors from '../components/TopDoctors';
import LocationComponent from '../components/LocationComponent';
import FirstSection from '../components/FirstSection'
import VideoBanner from '../components/VideoBanner'
import UnderHeader from '../components/UnderHeader';

function Home() {
  return (
    <>
      <Header />
      <UnderHeader />
      <FirstSection />
      <TopDoctors />
      <VideoBanner />
      <LocationComponent /> 
    </>
  );
}

export default Home;
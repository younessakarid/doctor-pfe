import React from 'react';
import Header from '../components/Header';
import TopDoctors from '../components/TopDoctors';
import LocationComponent from '../components/LocationComponent';
import FirstSection from '../components/FirstSection'
import VideoBanner from '../components/VideoBanner'
import Assurance from '../components/Assurance'
import ImageText from '../components/ImageText';

function Home() {
  return (
    <>
      <Header />
      <ImageText/>
      <FirstSection />
      <VideoBanner />
      <Assurance/>
      <TopDoctors />
      <LocationComponent /> 

    </>
  );
}

export default Home;
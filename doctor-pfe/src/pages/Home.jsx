import React from 'react';
import Header from '../components/Header';
import TopDoctors from '../components/TopDoctors';
import LocationComponent from '../components/LocationComponent';

function Home() {
  return (
    <>
      <Header />
      <TopDoctors />
      <LocationComponent /> 
    </>
  );
}

export default Home;
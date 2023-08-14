import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar/Navbar';
import LandingPage from './components/Landing/Landing';
import AnimatedCarousel from './components/Carousel/Carousel';

import './App.css';

function App() {
  const images = [
    {
      url: './images/boudha.jpg',
      name: 'Boudha,Kathmandu',
      description: 'A holy place showing beauty Boudhist located in Kathmandu,Nepal',
    },
    {
      url: './images/durbar.jpg',
      name: 'Kathmandu Durbar Square',
      description: 'Anciently built king houses with ancient styles.',
    },
    {
      url: './images/pasupati.jpg',
      name: 'Pasupatinath,Kathmandu',
      description: 'Most renowned holy place in Nepal where Lord Shiva is worshipped.',
    },
    {
      url: './images/thamel.jpg',
      name: 'Thamel,Kathmandu',
      description: 'Popular for clubs and nightout. Probably Tourism areas',
    },
    {
      url: './images/basantapur.jpg',
      name: 'Basantapur,Kathmandu',
      description: 'Place with collection of ancient old Durbars.',
    },
    {
      url: './images/buddhastatue.jpg',
      name: 'Thimpu,Bhutan',
      description: 'A beautiful statue of Lord Buddha located at top-hill',
    },
    {
      url: './images/tigernest.jpg',
      name: 'Tiger Nest,Bhutan',
      description: 'Great architecture in between the hills',
    },
    {
      url: './images/punakha.jpg',
      name: 'Punakha,Bhutan',
      description: 'The palace of great happiness or bliss',
    },
    // Add more images and descriptions here
  ];
  return (
    <div className="App">
      <CustomNavbar />
      <LandingPage />
      <br></br>
      <h4 className='sght'>Sightseeing of Kathmandu and Bhutan</h4>
      <AnimatedCarousel images={images} />
      
      
    </div>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import PetGame from './PetGame';

var HomePage = function(props) {
  return (
    <div>
      <Header />
      <PetGame />
    </div>
  );
};

export default HomePage;

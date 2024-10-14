import React from 'react';
import './App.css';
import { cars } from './module-data';  // Importujemy dane samochodów
import CarProfile from './components/CarProfile';  // Importujemy komponent CarProfile

function App() {
  return (
    <div className="App">
      <h1>Car Profiles</h1>

      {/* Pętla .map() generująca komponent CarProfile dla każdego samochodu */}
      {cars.map((car) => (
        <CarProfile key={car.id} car={car} />
      ))}
    </div>
  );
}

export default App;

import React from 'react';
import { cars } from '../data/module-data'
import CarProfile from '../components/CarProfile';  // Zmodyfikuj ścieżkę, jeśli komponent jest w innym miejscu\

const handleEdit = (id) => {
    console.log(`Edit car with ID: ${id}`);
};
const handleDelete = (id) => {
    console.log(`Delete car with ID: ${id}`);
};
const handleRate = (id, rating) => {
    console.log(`Rate car with ID: ${id}, rating: ${rating}`);
};


const Lab1 = () => {
    return (
        <div>
            <h1>List of Car Profiles</h1>
            {cars.map(car => (
                <CarProfile
                    key={car.id}
                    car={car}
                    onEdit={() => handleEdit(car.id)}
                    onDelete={() => handleDelete(car.id)}
                    onRate={(rating) => handleRate(car.id, rating)}
                />
            ))}
        </div>
    );
};

export default Lab1;


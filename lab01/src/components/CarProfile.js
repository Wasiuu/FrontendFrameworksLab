import React from 'react';


const CarProfile = ({ car }) => {
    return (
        <div className="car-profile" style={styles.container}>
            <h2 style={styles.title}>Car Profile</h2>
            <p><strong>ID:</strong> {car.id}</p>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Registration Number:</strong> {car.registrationNumber}</p>
            <p><strong>Year:</strong> {car.year}</p>
        </div>
    );
};

// Prosty styl dla komponentu
const styles = {
    container: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    },
    title: {
        fontSize: '1.5em',
        marginBottom: '10px'
    }
};

export default CarProfile;

import React from 'react';
import PropTypes from 'prop-types';


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
CarProfile.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        registrationNumber: PropTypes.string.isRequired,
    }).isRequired,
};


export default CarProfile;

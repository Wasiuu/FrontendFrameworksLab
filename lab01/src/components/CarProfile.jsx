import React from 'react';
import PropTypes from 'prop-types';

const CarProfile = ({ car, onEdit, onDelete, onRate }) => {
    return (
        <div className="car-profile" style={styles.container}>
            <h2 style={styles.title}>Car Profile</h2>
            <p><strong>ID:</strong> {car.id}</p>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Registration Number:</strong> {car.registrationNumber}</p>
            <p><strong>Year:</strong> {car.year}</p>

            { }
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => onEdit(car.id)}>Edit</button>
                <button style={styles.button} onClick={() => onDelete(car.id)}>Delete</button>
                <button style={styles.button} onClick={() => onRate(car.id)}>Rate</button>
            </div>
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
    },
    buttonContainer: {
        marginTop: '10px'
    },
    button: {
        marginRight: '10px',
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
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
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onRate: PropTypes.func.isRequired,
};

export default CarProfile;

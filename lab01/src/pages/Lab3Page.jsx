import React from 'react';
import PropTypes from 'prop-types'; // Importuj prop-types

const Lab3Page = ({ name, id }) => {
    return (
        <div>
            <h3>Szczegóły osoby o ID: {id}</h3>
            <p>Imię i nazwisko: {name}</p>
            {/* Dodaj inne informacje lub komponenty w zależności od potrzeby */}
        </div>
    );
};


Lab3Page.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Lab3Page;

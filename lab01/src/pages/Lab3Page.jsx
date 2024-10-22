import React from 'react';
import FlexContainer from '../components/FlexContainer';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const data = [
    { name: "Ala", id: 1 },
    { name: "Ela", id: 2 },
    { name: "Karol", id: 3 },
    { name: "Ola", id: 4 },
    { name: "Monik", id: 5 },
    { name: "Robert", id: 6 },
];

const Item = ({ name, id }) => (
    <Card style={{ width: '18rem' }} className="border mb-3 p-3 ms-3">
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>ID: {id}</Card.Text>
        </Card.Body>
    </Card>
);

const Lab3Page = () => {
    return (
        <div>
            <h2>Laboratorium 3</h2>
            <FlexContainer element={Item} data={data} />
        </div>
    );
};

export default Lab3Page;

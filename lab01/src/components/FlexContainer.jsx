import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const FlexContainer = ({ element: Element, data }) => {
    return (
        <Row className="d-flex justify-content-start">
            {data.map(item => (
                <Col key={item.id}>
                    <Element {...item} />
                </Col>
            ))}
        </Row>
    );
};


FlexContainer.propTypes = {
    element: PropTypes.elementType.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            rating: PropTypes.number
        })
    ).isRequired
};

export default FlexContainer;

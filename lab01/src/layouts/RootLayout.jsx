import React from 'react';
import PropTypes from 'prop-types';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

const RootLayout = ({ items, children }) => {
    return (
        <div>
            <NavBarMenu items={items} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

RootLayout.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            urlPattern: PropTypes.string,
            element: PropTypes.element,
        })
    ).isRequired,
    children: PropTypes.node.isRequired,
};

export default RootLayout;

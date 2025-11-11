/**
 * Navigation Component
 * Top navigation bar using React Bootstrap
 * Features:
 * - Dark theme for better contrast
 * - Responsive design
 * - Shopping bag icon for branding
 */
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <i className="fas fa-shopping-bag me-2"></i>
                    Product Showcase
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Navigation;
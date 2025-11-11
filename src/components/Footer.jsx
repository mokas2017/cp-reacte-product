/**
 * Footer Component
 * Bottom footer with copyright information
 * Features:
 * - Dynamic year display
 * - Accessibility emphasis
 * - Dark theme matching the navigation
 */
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container className="text-center">
                {/* Dynamic copyright year */}
                <p className="mb-0">© {new Date().getFullYear()} Product Showcase. All rights reserved.</p>
                <p className="mb-0 mt-2">
                    <small className="text-muted">Made with <span className="text-danger">♥</span> for accessibility</small>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
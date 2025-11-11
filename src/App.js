/**
 * App.js - Main Application Component
 * 
 * This is the root component of the React application.
 * It orchestrates all child components and manages the application state.
 * 
 * Features:
 * - Product display card with image, name, price, and description
 * - Interactive name form
 * - Dynamic greeting message with conditional image display
 * - Responsive layout using React Bootstrap
 * - Full accessibility support
 * 
 * Structure:
 * - Navigation bar (top)
 * - Product card (center)
 * - Name input form
 * - Conditional greeting section
 * - Footer (bottom)
 */
import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Name, Price, Description, Image, Navigation, Footer, NameForm } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  // State to store the user's first name
  const [firstName, setFirstName] = useState('');

  /**
   * Handles name submission from the NameForm component
   * Updates the firstName state which triggers the greeting display
   * 
   * @param {string} name - The name entered by the user
   */
  const handleNameSubmit = (name) => {
    setFirstName(name);
  };

  return (
    // Flexbox layout to ensure footer stays at bottom
    <div className="d-flex flex-column min-vh-100">
      {/* Top Navigation Bar */}
      <Navigation />
      
      {/* Main Content Area - grows to fill available space */}
      <Container className="flex-grow-1 py-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {/* Product Card */}
            <Card className="product-card shadow">
              <div className="image-container">
                <Image />
              </div>
              <Card.Body>
                <Name />
                <Price />
                <Description />
              </Card.Body>
            </Card>
            
            {/* Name Input Form */}
            <div className="mt-4">
              <NameForm onSubmit={handleNameSubmit} />
            </div>
            
            {/* Greeting Section - Only displayed when firstName is set */}
            {firstName && (
              <div className="greeting-section text-center mt-4">
                <h3 className="greeting-text">
                  Hello, {firstName}!
                </h3>
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=500&q=60"
                  alt="Welcome"
                  className="greeting-image mt-3 rounded shadow"
                  style={{ maxWidth: '200px' }}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>

      {/* Footer - Always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
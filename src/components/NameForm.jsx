/**
 * NameForm Component
 * Interactive form for user name input
 * Features:
 * - State management with React hooks
 * - Form validation (required field)
 * - Disabled submit button when input is empty
 * - Accessible form with proper labels and descriptions
 * - Clears input after submission
 * 
 * @param {Function} onSubmit - Callback function when form is submitted
 */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NameForm = ({ onSubmit }) => {
    // Local state to manage the name input
    const [name, setName] = useState('');

    /**
     * Handles form submission
     * Prevents default form behavior, calls parent callback, and resets form
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
        setName(''); // Clear the input after submission
    };

    return (
        <Form onSubmit={handleSubmit} className="name-form p-4 bg-white rounded shadow-sm">
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-describedby="nameHelp"
                />
                {/* Helper text for accessibility */}
                <Form.Text id="nameHelp" className="text-muted">
                    We'll use this to personalize your greeting.
                </Form.Text>
            </Form.Group>
            {/* Submit button is disabled when input is empty or only whitespace */}
            <Button 
                variant="primary" 
                type="submit"
                className="w-100"
                disabled={!name.trim()}
            >
                Show Greeting
            </Button>
        </Form>
    );
};

export default NameForm;
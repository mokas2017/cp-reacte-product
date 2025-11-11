/**
 * Components Index
 * Central export file for all components
 * Allows for clean import statements in other files
 * 
 * Usage example:
 * import { Name, Price, Description } from './components';
 * 
 * Instead of:
 * import Name from './components/Name';
 * import Price from './components/Price';
 * import Description from './components/Description';
 */

// Product-related components
export { default as Name } from './Name';
export { default as Price } from './Price';
export { default as Description } from './Description';
export { default as Image } from './Image';

// Layout components
export { default as Navigation } from './Navigation';
export { default as Footer } from './Footer';

// Form components
export { default as NameForm } from './NameForm.jsx';
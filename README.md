# Product Showcase - React Component Project

A modern, fully accessible React application showcasing a product card with interactive features. This project demonstrates best practices in React development, component architecture, and web accessibility.

## 🌟 Features

- **Product Display Card**: Beautiful card layout displaying product information (image, name, price, description)
- **Interactive Name Form**: Form with validation to personalize user experience
- **Dynamic Greeting**: Conditional rendering based on user input
- **Responsive Design**: Mobile-first approach using React Bootstrap
- **Full Accessibility**: WCAG 2.1 compliant with:
  - Screen reader support
  - Keyboard navigation
  - ARIA labels
  - High contrast mode support
  - Reduced motion preferences
- **Modern UI/UX**: Smooth transitions, hover effects, and professional styling

## 📁 Project Structure

```
src/
├── components/
│   ├── Name.js           # Displays product name
│   ├── Price.js          # Displays product price
│   ├── Description.js    # Displays product description
│   ├── Image.js          # Displays product image
│   ├── Navigation.js     # Top navigation bar
│   ├── Footer.js         # Bottom footer
│   ├── NameForm.js       # Interactive form component
│   └── index.js          # Component exports
├── product.js            # Product data object
├── App.js                # Main application component
├── App.css               # Application styles
└── index.js              # React entry point
```

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📦 Installation

1. Clone the repository or download the project
2. Navigate to the project directory:
   ```bash
   cd react-cp-component
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🛠️ Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **React Bootstrap** - Bootstrap components built with React
- **Bootstrap 5** - CSS framework for responsive design
- **Font Awesome** - Icon library
- **CSS3** - Modern styling with custom properties

## 💻 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 🎨 Customization

### Modifying Product Data

Edit `src/product.js` to change the product information:

```javascript
const product = {
    name: "Your Product Name",
    price: 99.99,
    description: "Your product description",
    imageUrl: "your-image-url"
};
```

### Changing the Name Variable

In `App.js`, the initial `firstName` state can be modified. By default, it shows "Hello, there!" when empty.

### Styling

- Main styles are in `src/App.css`
- Component-specific styles use Bootstrap classes
- Custom CSS variables can be added for theme customization

## ♿ Accessibility Features

This project follows WCAG 2.1 guidelines and includes:

- **Semantic HTML**: Proper use of headings, labels, and landmarks
- **ARIA Labels**: Screen reader support for all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Clear visual focus states
- **Color Contrast**: Meets AA standards for text readability
- **Reduced Motion**: Respects user's motion preferences
- **Form Validation**: Clear error messages and required field indicators
- **Alt Text**: Descriptive alternative text for all images

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (< 768px)
- 📱 Tablets (768px - 992px)
- 💻 Desktops (> 992px)

## 🧩 Component Architecture

Each component is:
- **Self-contained**: Manages its own logic and styling
- **Reusable**: Can be easily imported and used elsewhere
- **Well-documented**: Includes JSDoc comments
- **Accessible**: Follows accessibility best practices

## 🎯 How It Works

1. **Product Display**: Product data is imported from `product.js` into individual components
2. **Name Form**: User enters their name in the form
3. **State Management**: `App.js` manages the `firstName` state using React hooks
4. **Conditional Rendering**: Greeting section appears only when a name is submitted
5. **Form Reset**: Form clears after submission for better UX

## 🔍 Code Quality

- **Clean Code**: Well-organized and readable
- **Comments**: Comprehensive JSDoc comments throughout
- **Component Separation**: Clear separation of concerns
- **ES6+ Features**: Modern JavaScript syntax
- **Best Practices**: Follows React and JavaScript best practices

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use, the development server will prompt you to use another port.

### Module Not Found

If you encounter module errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading

Ensure your internet connection is active as images are loaded from external URLs (Unsplash).

## 📚 Learn More

### React Resources
- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)

### Web Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a demonstration of React component architecture and accessibility best practices.

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- UI Framework by [React Bootstrap](https://react-bootstrap.github.io/)

---

**Made with ❤️ for accessibility and great user experience**

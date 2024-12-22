const app = require('./app'); // Import the app from app.js

// Define the port (or use the one in the .env file)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

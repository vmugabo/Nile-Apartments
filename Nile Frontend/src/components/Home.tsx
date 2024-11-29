import React from 'react';
import hotelImage from '../assets/hotel.jpg';  // Correct way to import the image

const Home: React.FC = () => (
  <div style={styles.container}>
    <h2 style={styles.title}>Welcome to Nile Apartments</h2>
    <p style={styles.description}>
      We offer luxury serviced apartments near Kigali International Airport, providing premium comfort for business travelers and tourists alike.
    </p>
    <p style={styles.instruction}>
      Navigate to the dashboard to see your reservations.
    </p>
    <img src={hotelImage} alt="Nile Apartments" style={styles.image} />
  </div>
);

const styles = {
  container: {
    backgroundColor: '#f0f4f8',  // Light background color for the page
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    textAlign: 'center',
    color: '#003366',  // Dark blue for text
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#0071c2',  // Bright blue for the title
    marginBottom: '15px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
    maxWidth: '600px',  // Limiting text width for better readability
  },
  instruction: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0071c2',
    marginBottom: '30px',
  },
  image: {
    width: '100%',
    maxWidth: '800px',  // Ensuring the image doesn’t stretch too wide
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',  // Adding a subtle shadow for depth
    objectFit: 'cover',  // Ensures the image covers the space proportionally
  },
};

export default Home;

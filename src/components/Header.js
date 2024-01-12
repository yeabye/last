import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = ({ isAuthenticated, onLogout }) => {
  const [showContactDetails, setShowContactDetails] = useState(false);


   const handleLogout = () => {
    // Directly log out without showing the confirmation dialog
    onLogout();
   }

  const toggleContactDetails = () => {
    // Toggle the state for showing/hiding contact details
    setShowContactDetails(!showContactDetails);
  };

  return (
    <header>
 <style>{`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    color: rgba(255, 255, 255, 0.9); /* Adjust alpha value for text transparency */
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
    background: ${isAuthenticated
      ? 'linear-gradient(to right, #00b09b, #96c93d)'
      : 'linear-gradient(to right, #44A08D, #093637)'}; /* Adjust alpha value and colors for background transparency */
    opacity: 0.9; /* Adjust alpha value for overall transparency */
  }

        img {
          height: 60px;
          width: auto;
          cursor: pointer;
          transition: opacity 0.3s;
        }

        img:hover {
          opacity: 0.8;
        }

        nav {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        nav a, button {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          font-size: 1em;
          padding: 10px 20px;
          border-radius: 40px;
          transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
          cursor: pointer;
          display: flex;
          align-items: center;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        nav a:hover, button:hover {
          background-color: ${isAuthenticated ? '#64b3f4' : '#4EB1F5'};
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        }

        button {
          border: none;
          outline: none;
          justify-content: space-between;
          display: flex;
        }

        .user-button:hover, .home-button:hover {
          background-color: ${isAuthenticated ? '#64b3f4' : '#4BB8F0'};
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
        }

        .icon {
          margin-right: 10px;
          font-size: 1.2em;
        }

        .contact-button {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          font-size: 1em;
          padding: 10px 20px;
          border-radius: 40px;
          transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
          cursor: pointer;
          display: flex;
          align-items: center;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          background-color: #4CAF50; /* Green background color */
        }

        .contact-button:hover {
          background-color: #45a049;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        }

        .contact-details {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .contact-details h2 {
          color: #333;
          margin-bottom: 20px;
        }

        .contact-details p {
          color: #555;
        }
      `}</style>
       <div>
        <Link to="/">
          <img src="/images/loogoo.png" alt="Logo" />
        </Link>
      </div>

      {isAuthenticated && (
        <nav>
          <Link to="/" className="home-button">
            <span className="icon">🏛️</span> Home
          </Link>
          {/* Moved Contact button next to Us button */}
          <Link to="/us" className="user-button">
            <span className="icon">💑</span> Us
          </Link>
         
        </nav>
      )}

      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>
            <span className="icon">🔐</span> Logout
          </button>

         
          
        </>
      ) : (
        <Link to="/login">
          <span className="icon">🔐</span> Login
        </Link>
      )}

{showContactDetails && (
  <div className="contact-details" style={{ opacity: showContactDetails ? 1 : 0 }}>
    <h2>Contact Details</h2>
    <div className="contact-info">
      <p>
        <a href="tel:+251960881752" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="/images/pp.png" alt="Phone Icon" /> <strong>Phone:</strong> +251960881752
        </a>
      </p>
      <p>
        <a href="https://t.me/yeabse" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="/images/tt.png" alt="Telegram Icon" /> <strong>Telegram:</strong>@yeabse
        </a>
      </p>
      <p>
        <a href="https://instagram.com/yeab_93" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="/images/ii.png" alt="Instagram Icon" /> <strong>Instagram:</strong> @yeab_93
        </a>
      </p>
      <p>
        <a href="mailto:yeabsiraeshete82@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="/images/em.png" alt="Email Icon" /> <strong>Email:</strong> yeabsiraeshete81@gmail.com
        </a>
      </p>
    </div>
    <style>{`
      .contact-details {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 20px;
        max-width: 300px;
        margin: 0 auto;
      }

      h2 {
        color: #4CAF50;
        font-weight: bold;
        margin-bottom: 15px;
      }

      .contact-info p {
        margin: 10px 0;
        color: #555;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .contact-info img {
        margin-right: 10px;
        width: 24px; /* Adjust the size as needed */
        height: auto;
      }

      .contact-info strong {
        font-weight: bold;
      }

      .contact-info a {
        text-decoration: none;
        color: #555;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .contact-info a:hover {
        color: #3498db;
      }
    `}</style>
  </div>
)}




    </header>
  );
};

export default Header;
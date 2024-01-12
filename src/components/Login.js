import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `example.${randomString}@domain.com`;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'yeabsor@gmail.com' && password === '01032015') {
      onLogin();
      navigate('/');
    } else {
      console.log('Invalid login');
    }
  };

  return (
    <section className="login-section">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          font-family: 'Arial', sans-serif;
        }

        .login-section {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
          background: url('/images/back.jpg') no-repeat center center fixed;
          background-size: cover;
          background-color: rgba(0, 0, 0, 0.3); /* Adjust alpha value for transparency */
        }
        
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60%;
          height: 80vh;
          background-color: rgba(255, 255, 255, 0.7); /* Adjust alpha value for transparency */
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          overflow: hidden;
        }
        .form-value {
          flex: 1;
          padding: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        h2 {
          font-size: 2.5em;
          color: #fff; /* White text color */
          text-align: center;
          margin-bottom: 30px;
        }

        .inputbox {
          position: relative;
          margin: 20px 0;
        }

        .inputbox ion-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #2ecc71; /* Green color for icons */
          font-size: 1.2em;
        }

        .inputbox input {
          width: 100%;
          height: 50px;
          background: #ecf0f1; /* Light gray background */
          border: 1px solid #bdc3c7; /* Light border color */
          border-radius: 8px;
          outline: none;
          padding-left: 50px;
          font-size: 1.2em;
          color: #555;
          transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        }

        .inputbox input::placeholder {
          color: #95a5a6; /* Placeholder color */
        }

        .inputbox input:focus {
          border-color: #3498db; /* Blue border color on focus */
          background-color: #fff; /* White background on focus */
          color: #333; /* Dark text on focus */
        }

        .inputbox input:focus::placeholder,
        .inputbox input:valid::placeholder {
          color: transparent;
        }

        .inputbox label {
          position: absolute;
          top: 50%;
          left: 50px;
          transform: translateY(-50%);
          color: #3498db;
          font-size: 1em;
          pointer-events: none;
          transition: transform 0.3s, font-size 0.3s, color 0.3s;
        }

        .inputbox input:focus + label,
        .inputbox input:valid + label {
          top: 20px;
          font-size: 0.8em;
          color: #555;
        }

        button {
          width: 100%;
          height: 50px;
          border-radius: 8px;
          background: linear-gradient(to right, #2ecc71, #27ae60); /* Green gradient */
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 1.2em;
          font-weight: 600;
          color: #fff;
          transition: background 0.3s;
        }

        button:hover {
          background: linear-gradient(to right, #27ae60, #2ecc71); /* Inverted gradient on hover */
        }

        .register {
          font-size: 1em;
          color: #fff; /* White text color */
          text-align: center;
          margin: 20px 0;
        }

        .register p a {
          text-decoration: none;
          color: #3498db;
          font-weight: 600;
          transition: color 0.3s;
        }

        .register p a:hover {
          color: #2a78b9;
        }
      `}</style>
      <div className="container">
        <div className="form-value">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={generateRandomEmail()}
              />
              
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
             
            </div>
            <button type="submit">Log In</button>
            <div className="register">
              <p>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

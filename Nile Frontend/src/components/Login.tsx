import React, { useState } from 'react';

const Login: React.FC<{ onLogin?: () => void }> = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      alert('Login successful!');
      if (onLogin) onLogin();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome to Nile Apartments</h2>
          <p style={styles.subtitle}>Sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Sign In
          </button>
          <p style={styles.footer}>
            Don’t have an account?{' '}
            <span style={styles.signupLink} onClick={() => alert('Redirect to Sign Up')}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#f0f4f8',
    margin: 0,  // Ensures the container takes up the full height of the page
  },
  box: {
    width: '100%',
    maxWidth: '400px',  // Limit the form's width
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    padding: '20px',
  },
  header: {
    backgroundColor: '#0071c2',
    color: 'white',
    textAlign: 'center' as 'center',
    padding: '20px',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: '5px 0 0',
    fontSize: '14px',
  },
  form: {
    padding: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #dcdcdc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    backgroundColor: '#0071c2',
    color: 'white',
    padding: '10px 0',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
    backgroundColor: '#005fa3',  // Darker shade on hover
  },
  },
  footer: {
    textAlign: 'center' as 'center',
    marginTop: '15px',
    fontSize: '14px',
  },
  signupLink: {
    color: '#0071c2',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Login;

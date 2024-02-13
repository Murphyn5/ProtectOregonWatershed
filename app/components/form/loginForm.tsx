'use client';
import React, { useState, useEffect } from 'react';
import makeRequest from '../../ServerAPI';
interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [login, setResponse] = useState('no response');
  const [csrfToken, setCsrfToken] = useState("");


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   // Fetch CSRF token from your server
  //   fetch("/api/get_csrf_token")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCsrfToken(data.csrf_token)
  //       Cookies.set('csrf_token', data.csrf_token)
  //     })
  //     .catch((error) => console.error("Error fetching CSRF token:", error));
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formDataToSend = new FormData();
    // formDataToSend.append("email", formData.email);
    // formDataToSend.append("password", formData.password);

    // // Append the CSRF token to the FormData
    // formDataToSend.append("csrf_token", csrfToken);
    // console.log('Form Data Submitted', formData);


    makeRequest('/api/auth/login', 'POST', csrfToken, formData).then((response: any) => {
      console.log('response:', response);
    });


    // makeRequest('/api/articles/', 'GET').then((response: any) => {
    //   console.log('response:', response);
    // });
    // const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

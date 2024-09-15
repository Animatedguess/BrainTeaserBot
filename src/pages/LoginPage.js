import React from 'react';
import LoginForm from '../component/LoginFrom';  // Correct the import name
import { useOutletContext } from 'react-router-dom';

function LoginPage() {
  const { setIsAuthenticated } = useOutletContext();  // Use the context from the outlet to manage auth state
  return (
    <div>
      <LoginForm setIsAuthenticated={setIsAuthenticated} />  {/* Pass down the setter */}
    </div>
  );
}

export default LoginPage;

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SignUpForm from '../component/SignUpForm'; // Ensure the import path is correct

function SignUpPage() {
  const { setIsAuthenticated } = useOutletContext(); // Getting the `setIsAuthenticated` method from context
  
  return (
    <div>
      <SignUpForm setIsAuthenticated={setIsAuthenticated} /> {/* Pass down the setter */}
    </div>
  );
}

export default SignUpPage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login,logout, user } = useAuth();
  const [userType, setUserType] = useState('jobseeker');

  const handleLogin = () => {
    login(userType);
    navigate(`/${userType}`);
  };

  const handleLogOut =()=>{
    logout();
  }

  const handleGoToDashboard = () => {
    navigate(`/${user.type}`);
  };

  
  if(user)
{
  return (
    // <div className="container min-w-full flex items-center justify-center p-6 bg-neugray-bg">
    <div className=" min-h-screen  flex items-center justify-center p-4 sm:p-6">
      <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-5 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-neugray-text">Job Portal Login</h1>
          <h2 className="text-xl font-semibold mb-6 text-center p-6">
         logged in as{" "}
          <span className="text-blue-300 capitalize">{user.type}</span>
        </h2>
        </div>
        
        <div className="space-y-5 sm:space-y-6">
          
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleGoToDashboard}
            className="w-full bg-neugray-bg py-2.5 sm:py-3 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium text-base sm:text-lg" 
          >
            Go to {user.type.charAt(0).toUpperCase() + user.type.slice(1)} Dashboard
          </button>
  
          <button 
            onClick={handleLogOut}
            className="w-full bg-neugray-bg py-2.5 sm:py-3 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium text-base sm:text-lg"
            aria-label="Login"
          >
            Logout
                      </button>
        </div>
          
          
          
          <div className="pt-2 text-center text-xs lg:text-sm text-gray-500">
            <p>No registration required for demo</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};


  return (
    // <div className="container min-w-full flex items-center justify-center p-6 bg-neugray-bg">
    <div className=" min-h-screen  flex items-center justify-center p-4 sm:p-6">
      <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-5 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-neugray-text">Job Portal Login</h1>
          <p className="text-center text-gray-500 text-sm lg:text-base mt-2">Select user type to continue</p>
        </div>
        
        <div className="space-y-5 sm:space-y-6">
          <div>
            <label className="block text-gray-600 text-sm sm:text-base mb-2">Select User Type</label>
            <div className="relative">
              <select 
                className="w-full p-2.5 sm:p-3 bg-neugray-bg rounded-lg shadow-neumorph-pressed appearance-none focus:outline-none focus:ring-2 focus:ring-neugray-accent text-neugray-text"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                aria-label="Select user type"
              >
                <option value="jobseeker">Job Seeker</option>
                <option value="recruiter">Recruiter</option>
                <option value="manager">Hiring Manager</option>
              </select>
            
            </div>
          </div>
          
          <button 
            onClick={handleLogin}
            className="w-full bg-neugray-bg py-2.5 sm:py-3 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium text-base sm:text-lg"
            aria-label="Login"
          >
            Login
          </button>
          
          <div className="pt-2 text-center text-xs lg:text-sm text-gray-500">
            <p>No registration required for demo</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Login;
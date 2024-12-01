import React, { useState } from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignPage from './pages/SignIn';
import RecruiterLayout from './pages/RecruiterLayout';
import ApplicantLayout from './pages/ApplicantLayout';
import ProfileComplete from './components/Profile';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProps } from './types.d';

const OKTO_CLIENT_API_KEY = import.meta.env.VITE_APP_OKTO_CLIENT_API_KEY || '';
function App() {
 console.log('App component rendered');
 const [authToken, setAuthToken] = useState('');
 const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);
 const handleLogout = () => {
    console.log("setting auth token to null")
    setAuthToken(''); // Clear the authToken
  };
  // define props
  const authProps: AuthProps = {
    authToken,
    setAuthToken,
    handleLogout,
    isRecruiter,
    setIsRecruiter,
    isProfileComplete,
    setIsProfileComplete
  };
 return (
   <Router>
 8     <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
       <Routes>
         <Route path="/" element={<SignPage {...authProps} />} />
         <Route path="/profile-complete" element={authToken && isProfileComplete && isRecruiter? <RecruiterLayout {...authProps}/> : <Navigate to="/" />} />
         <Route path="/recruiter" element={authToken && isProfileComplete? <ApplicantLayout {...authProps}/> : <Navigate to="/" />} />
         <Route path="/applicant" element={authToken ? <ProfileComplete {...authProps}/> : <Navigate to="/" />} />       
       </Routes>
     </OktoProvider>
   </Router>
 );
}
export default App;
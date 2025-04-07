import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedUserTypes }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in
    return <Navigate to="/login" />;
  }

  if (!allowedUserTypes.includes(user.type)) {
    // Wrong user type
    return <Navigate to={`/${user.type}`} />;
  }

  return children;
};

export default ProtectedRoute;
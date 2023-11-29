import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isUserLoggedIn } from '../service/authService';

const AuthenticatedRoute = ({ children }) =>
  isUserLoggedIn() ? children : <Navigate to="/" />;

AuthenticatedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthenticatedRoute;

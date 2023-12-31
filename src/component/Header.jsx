import { NavLink, useNavigate } from 'react-router-dom';
import { getName, isUserLoggedIn, logout } from '../service/authService';

const Header = () => {
  const isAuthenticated = isUserLoggedIn();
  const navigator = useNavigate();

  const name = getName()?.split(' ')[0];

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="/" className="navbar-brand">
              Todo Management System
            </a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink to="/todos" className="nav-link">
                    Todos
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isAuthenticated && (
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            )}

            {!isAuthenticated && (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}

            {isAuthenticated && (
              <>
                <li className="nav-item text-white">
                  {name.slice(0, 1).toUpperCase().concat(name.slice(1))}
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    onClick={() => {
                      logout();
                      navigator('/login');
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

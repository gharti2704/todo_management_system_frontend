import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-center mt-2">
        © {new Date().getFullYear()} Todo Management System. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;

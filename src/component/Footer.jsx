const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: 'gray', padding: '10px', textAlign: 'center' }}
    >
      <p style={{ color: 'white' }}>This is the footer.</p>
      <p style={{ color: 'white', fontSize: '12px' }}>
        © {new Date().getFullYear()} Todo Management System. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;

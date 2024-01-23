import React from "react";

const Footer = () => {
  const updatedDate = new Date().getFullYear();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid black",
        padding: "3px",
        fontSize: "15px",
      }}
    >
      <p>&copy; {updatedDate} <a href="mailto:" style={{
        textDecoration: 'none', color: "inherit"
      }}>Oloyede Na'eem A.</a> | All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

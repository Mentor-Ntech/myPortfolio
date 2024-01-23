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
      <p>&copy; {updatedDate} Oloyede Na'eem A. | All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ<strong>Dev Sahir </strong> {year}</p>
    </footer>
  );
}

export default Footer;

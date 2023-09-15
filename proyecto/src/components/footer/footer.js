import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <footer className='footer'>
        <article>
          <h1>Lucio Ghidini - Justo Gottlieb - Santino Galli</h1>
          <h1>© 2023 - 2023 www.Flixer.com - All Rights Reserved.</h1>
          
          <Link to='/' className= "logo"> FLIXER  </Link>
          
        </article>
      </footer>
    </React.Fragment>
  );
}

export default Footer;

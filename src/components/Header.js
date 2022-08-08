import React from 'react';
import { Container, Image } from 'react-bootstrap';

function Header() {
  return (
    <div className='header text-center p-3'>
        <Image className='logo-image rounded-circle' src='spend-money-logo.jpg' alt='Spend Money' />
        <h1>Spend Money</h1>
    </div>
  )
}

export default Header;
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
}: HeaderProps) => {
  const selected = useLocation().pathname;

  return (
    <Container size={size} selected={selected}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">Listing</Link>
          <Link to="/import">Import</Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;

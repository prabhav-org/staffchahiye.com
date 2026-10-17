import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List as Menu, X, ArrowUpRight } from '@phosphor-icons/react';
import logo from '../assets/logo.svg';
import { STAFFING_FORM_URL } from '../constants/links';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [{ to: '/', label: 'Home' }, { to: '/about-us', label: 'About Us' }, { to: '/pricing', label: 'Pricing' }];
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo" aria-label="StaffChahiye home" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="StaffChahiye" />
        </Link>
        <nav className="site-desktop-nav" aria-label="Main navigation">
          {links.map(({ to, label }) => <Link key={to} to={to} aria-current={pathname === to ? 'page' : undefined}>{label}</Link>)}
          <a href={STAFFING_FORM_URL} target="_blank" rel="noopener noreferrer" className="staff-cta">Get Staff <ArrowUpRight size={18} aria-hidden="true" /></a>
        </nav>
        <button className="site-menu-toggle" type="button" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isMenuOpen && <nav id="mobile-navigation" className="site-mobile-nav" aria-label="Mobile navigation">
          {links.map(({ to, label }) => <Link key={to} to={to} aria-current={pathname === to ? 'page' : undefined} onClick={() => setIsMenuOpen(false)}>{label}</Link>)}
          <a href={STAFFING_FORM_URL} target="_blank" rel="noopener noreferrer" className="staff-cta" onClick={() => setIsMenuOpen(false)}>Get Staff <ArrowUpRight size={18} aria-hidden="true" /></a>
        </nav>}
      </div>
    </header>
  );
};

export default Header;

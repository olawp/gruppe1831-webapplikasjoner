/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavStyle, Button, NavLoggInn, NavButtons } from '../../styled/style';
import { useAuthContext } from '../../context/AuthProvider.jsx';
import { logout } from '../../utils/authService';

let click = 0;

const Navbar = () => {
  const { isLoggedIn, setUser } = useAuthContext();

  const [display, setDisplay] = useState('');

  function activePage(...pages) {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i] === window.location.href.split('/')[3]) {
        return 'active';
      }
    }
  }

  const loggut = async () => {
    await logout();
    setUser(null);
  };

  function burgerMenu() {
    if (click === 0) {
      setDisplay('inline');
      click += 1;
    } else if (click === 1) {
      setDisplay(' ');
      click -= 1;
    }
  }

  return (
    <div>
      <NavStyle className="navigationBar">
        <a href="/" className="logoHome">
          <h3>FG</h3>
        </a>
        <Button className="mobileMenu" onClick={burgerMenu}>
          Menu
        </Button>
        <div>
          {!isLoggedIn && (
            <NavLoggInn style={{ display }} className="loggInn" href="/logginn">
              LOGG INN
            </NavLoggInn>
          )}
          {isLoggedIn && (
            <NavLoggInn
              style={{ display: `${display} !important` }}
              onClick={loggut}
            >
              LOGG UT
            </NavLoggInn> // Begge er NavLoggInn, meb det trengs ingen NavLoggUt
          )}
          <NavButtons
            style={{ display }}
            className={activePage('kontakt')}
            href="/kontakt"
          >
            Kontakt
          </NavButtons>
          <NavButtons
            style={{ display }}
            className={activePage('fagartikler', 'artikkel')}
            href="/fagartikler"
          >
            Fagartikler
          </NavButtons>
          <NavButtons
            style={{ display }}
            className={activePage('kontorer', 'kontor')}
            href="/kontorer"
          >
            Kontorer
          </NavButtons>
          <NavButtons style={{ display }} className={activePage('')} href="/">
            Hjem
          </NavButtons>
        </div>
      </NavStyle>
    </div>
  );
};

export default Navbar;

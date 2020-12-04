import React, { useState } from 'react'
import {NavStyle, Button, NavLoggInn, NavButtons, NavLoggUt} from '../../styled/style';
import { useAuthContext } from '../../context/AuthProvider.jsx';
import { logout } from '../../utils/authService';

let click = 0;

const Navbar = () => {

    const { isLoggedIn, setUser } = useAuthContext();

    const [display, setDisplay] = useState("");

    const loggut = async() => { 
        await logout();
        setUser(null);
     }

    

    function burgerMenu(){
        if(click === 0){
            setDisplay("inline");
            click = click + 1;
        }
        else if(click === 1){
            setDisplay(" ");
            click = click - 1;
        }
    }

        return (
            <div>
                <NavStyle className="navigationBar">
                    <h3>FG</h3>
                    <Button className="mobileMenu" onClick={burgerMenu}>Menu</Button>
                    <div>
                        {!isLoggedIn && (
                            <NavLoggInn style={{display: display}} className="loggInn" href="/logginn">LOGG INN</NavLoggInn>
                        )}
                        {isLoggedIn && (
                            <NavLoggUt type="button" style={{display: display}} onClick={loggut}>LOGG UT</NavLoggUt>
                        )}
                        <NavButtons style={{display: display}} href="/kontakt">Kontakt</NavButtons>
                        <NavButtons style={{display: display}} href="/fagartikler">Fagartikler</NavButtons>
                        <NavButtons style={{display: display}} href="/kontorer">Kontorer</NavButtons>
                        <NavButtons style={{display: display}} className="active" href="/">Hjem</NavButtons>
                    </div>
                </NavStyle>
            </div>
        )
}

export default Navbar

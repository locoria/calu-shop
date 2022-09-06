import React from 'react';
import CartWidget from '../components/CartWidget';


const Navbar = ([background]) => {
    const brand = 
    'https://www.canva.com/design/DAE_7Ecs1l0/view';

    return (
        <header className={`header background--${background}`}>
            <div className="header-container">
            
            <div className="menu-button">
            <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
          <span>Menu</span> 
            </div>
            <nav>
                <ul className='nav-container'>
                    <li>
                        <a href='/'>Inicio</a>
                    </li>

                    <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li className="products-item">
              <a href="/">
                New In <span className="arrow"></span>
              </a>
            </li>
                </ul>
 </nav>
 <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>
        <CartWidget />

            </div>
        </header>
    )
}
export default Navbar;
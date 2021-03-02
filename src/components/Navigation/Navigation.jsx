import React, { useEffect } from "react";
import "./Navigation.scss";
import logo from "../../logo.svg";

const Navigation = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["header"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  console.log("scrolled value:", scrolled);

  return (
    <header className={navbarClasses.join(" ")}>
      <img src={logo} alt='logo' className='header__logo' />
      <div className='header__brand'>
        <span className='header__brand--name'>Denteri</span>
        <span className='header__brand--slogan'>Tu sonrisa, mi prioridad</span>
      </div>
      <ul className='header__menu'>
        <li className='header__menu--item'>
          <a className='btn' href='#1'>
            Promociones
          </a>
        </li>
        <li className='header__menu--item'>
          <a className='btn' href='#2'>
            Blog
          </a>
        </li>
        <li className='header__menu--item'>
          <a className='btn' href='#2'>
            Cursos
          </a>
        </li>
        <li className='header__menu--item'>
          <a className='btn' href='#2'>
            Covid-19
          </a>
        </li>
      </ul>
    </header>
    //* With Bootstrap
    //   <header className={navBarClasses.join(" ")}>
    //     <nav className='navbar navbar-dark bg-dark'>
    //       <div className='container-fluid'>
    //         <a className='navbar-brand' href='https://reactjs.org'>
    //           <img src={logo} alt='logo-nav' />
    //           Denteri
    //         </a>
    //         <form className='d-flex'>
    //           <input
    //             className='form-control me-2'
    //             type='search'
    //             placeholder='Search'
    //             aria-label='Search'
    //           />
    //           <button className='btn btn-outline-success' type='submit'>
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </nav>
    //   </header>
  );
};

export default Navigation;

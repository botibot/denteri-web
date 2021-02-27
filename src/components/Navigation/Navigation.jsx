import React, { useEffect } from "react";
import "./navbar.scss";
import logo from "../../logo.svg";

const Navigation = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset);
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navBarClasses = ["navbar"];
  if (scrolled) {
    navBarClasses.push("scrolled");
  }

  console.log("scrolled value:", scrolled);

  return (
    //* With Bootstrap
    <header className={navBarClasses.join(" ")}>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='https://reactjs.org'>
            <img src={logo} alt='logo-nav' />
            Denteri
          </a>
          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

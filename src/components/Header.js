import React from 'react';
import{NavLink} from 'react-router-dom';

<<<<<<< HEAD
const Header = props => (
  <div className="header">
    <div className='container'>
    <h1 className='header__title'>{props.title}</h1>
    {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
    </div>

    
  </div>
=======
const Header=()=>(
   
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active'>Dashboard</NavLink>
        <NavLink to='create' activeClassName='is-active'>Create</NavLink>
        <NavLink to='edit' activeClassName='is-active'>Edit</NavLink>
        <NavLink to='help' activeClassName='is-active'>Help</NavLink>
    
    </header>
>>>>>>> 82334206699375f3cf82229cf768cd61a7fa153d
);

export default Header;
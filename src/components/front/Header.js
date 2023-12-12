import React, { useState } from 'react'
import './Header.css'
import data from '../data/Data';
import { FaCartArrowDown } from "react-icons/fa";


import {Link} from 'react-router-dom'

function Header() {
  const { cardData } = data;
  const [search, setSearch] = useState('');

  const filteredData = cardData.filter((user) =>
    user.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    
    <nav className='navbar'>

      <div className='logoimg'>
      <div className='logo'>
          <h3>LOGO</h3>
        </div>

        <div className='search'> 
           <form> 
           <input
            className='bar'
            type='text'
            placeholder='Find your product..'
           onChange={(event) => setSearch(event.target.value)} />

           <img className='navimg' src='./images/search.jpeg' alt='' />
           
           {search && (
          
          <ul>
            {filteredData.map((user) => (
              <div className='searchitems'> 
              <li key={user.id}> <img  className='searchImg' src={user.img} alt=''/> </li>
              <li key={user.id} className='titleOfserach'>{user.title}</li>
              </div>
            ))}
          </ul>
        )}
          </form> 
       </div> 


<div className='fashop'>
          <Link to='/Card'>
          <FaCartArrowDown className='fa' />
          </Link>
        </div>

       
         </div>
         <div className='navtop'>
      
      <ul className='nav-links' >
        <div className='navbuttom'>
          <Link to='/'>
            <li className='navli'>Home</li>
          </Link>
          <Link to='/Category'>
            <li className='navli'>Category</li>
          </Link>
          <Link to='/Contact'>
            <li className='navli'>Contact</li>
          </Link>
        </div>
      </ul>
      </div>
    </nav>
    
    </>
  );
}
export default Header;


import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import img1 from './cryptocurrency.png'
import { NavLink,Link } from 'react-router-dom';

function Navbar() {

    const [navtog,setNavtog] = useState(false);

    const handleClick = event => {
        setNavtog(!navtog);
        console.log(navtog)
    };
  return (
    <div className='header'>
        <ul className='liste'>
            <Link className='link logo'  to='/'>
                
                <img src={img1} alt='crypto'/>
                <h1>Cryverse</h1>
                
            </Link>

            <div className='menü ' onClick={handleClick} >
                <MenuIcon fontSize="large" ></MenuIcon>
               
            </div>
            <div className={navtog?'open':'close'}>
                <NavLink className='link set' to='/'>
                    <HomeIcon></HomeIcon>
                    <p>Home</p>
                </NavLink>
                <NavLink className='link set' to='/news'>
                    <NewspaperIcon></NewspaperIcon>
                    <p>News</p>
                </NavLink>
                <NavLink className='link set' to='/ranking'>
                    <StarHalfIcon></StarHalfIcon>
                    <p>Ranking</p>
                </NavLink>
            </div>
            

           
            

            
        </ul>
    </div>
    
  )
}

export default Navbar
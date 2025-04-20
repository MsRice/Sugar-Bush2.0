import React, { useEffect, useRef, useState } from 'react';
import Logo from '../img/logo/smlogo_500x500_noBackground.png'
import { Link } from 'react-router-dom';


const Nav = () => {
    const [navPosition, setNavPosition] = useState(false);
    
    useEffect(() =>{
        const handleScroll = () => {
                console.log(window.scrollY)
                setNavPosition(window.scrollY > 500)
                
            };
            
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);

    },[])

    return (

            
             <div className={`nav__bar ${navPosition ? 'nav__undocked':''}`}>

             <Link to={'/'}>
                     <figure className='nav__logo--wrapper'>
                         <img src={Logo} alt='Sugar Bush' className="nav__logo--image" />
                     </figure>
                 </Link>
     
                 <ul className='nav__list--links'>
                     <li className='nav__list--link link__hover--effect'><a href='/#about-us'>About Us</a></li>
                     <li className='nav__list--link link__hover--effect'><a href='/#hookah'>Hookah</a></li>
                     <li className='nav__list--link link__hover--effect'><Link to={'/Bookings'}>Bookings</Link></li>
                     <li className='nav__list--link link__hover--effect'><a href='/#contact-us'>Contact</a></li>
                     <li className='nav__list--link link__primary'>
                         <Link to={'/Order-Now'}>
                             Order Now
                         </Link>
                     </li>
                 </ul>
             </div>
             
       
        
    );
}

export default Nav;

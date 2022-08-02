import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars } from 'react-icons/fa'

import '../App.scss'

export default function Navbar(props){
    const WIDTH = window.screen.width;

    const [menu, setMenu] = useState(false);

    function toggleMenu(){setMenu(!menu);}
    

    if(WIDTH < 650){
        return(
            <div className='nav'>
                <div className='navbar'>
                    <div className='center'>
                        <h1>AK</h1>
                    </div>

                    <div className='navMenu'>
                       <FaBars style={{
                                color: '#fff3b1',
                                fontSize: '50px',
                                transform: menu ? 'rotate(90deg)' : '', 
                                transition: 'transform 250ms ease', // smooth transition
                            }}
                            id='bars'
                            onClick={toggleMenu}/>
                    </div>
                    <div className={menu ? 'sidebar active' : 'sidebar'}>
                        <div className='x' >
                            <p onClick={toggleMenu}>X</p>
                        </div>
                        <div className=
                            {menu ? 'navLinks linksActive' : 'navLinks'}>
                            <div className='link'>
                                <Link onClick={toggleMenu} to='about'>
                                    <h2>About</h2>
                                </Link>
                            </div>
                                    
                            <div className='link'>
                                <Link onClick={toggleMenu} to='/'>
                                    <h2>My Work</h2> 
                                </Link>
                            </div>

                            <div className='link'>
                                <Link onClick={toggleMenu} to='contact'>
                                    <h2>Contact Me</h2>
                                </Link>
                            </div>

                            <div id='resume' className='link'>
                                
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        );

    } else if(WIDTH >= 650){
        return(
            <div>
                <div className='navbar'>
                    <div className='center'>
                        <h1>Alec Kagebein</h1>
                    </div>

                    <div className='navLinks'>
                        <div className='link'>
                            <Link to='about'>
                                <h1>About</h1>
                            </Link>
                        </div>
                        
                        <div className='link'>
                            <Link to='/'>
                                <h1>My Work</h1> 
                            </Link>
                        </div>

                        <div className='link'>
                            <Link to='contact'>
                                <h1>Contact Me</h1>
                            </Link>
                        </div>

                        <div id='resume' className='link'>
                        
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}
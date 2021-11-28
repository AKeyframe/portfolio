import { Link } from "react-router-dom";

import '../App.scss'

export default function Navbar(props){
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
                </div>
            </div>
        </div>
    );
}
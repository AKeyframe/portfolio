import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <div>
            <div className='navbar'>
                <div>
                    <h1>Alec Kagebein</h1>
                </div>

                <div>
                    <div>
                        <Link to='about'>
                            <h1>About</h1>
                        </Link>
                    </div>
                    
                    <div>
                        <Link to='/'>
                            <h1>My Work</h1> 
                        </Link>
                    </div>

                    <div>
                        <Link to='contact'>
                            <h1>Contact Me</h1>
                        </Link>
                    </div>   
                </div>
            </div>
        </div>
    );
}
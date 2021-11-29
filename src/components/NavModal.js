import { Link } from "react-router-dom";

export default function NavModal(props){
    return(
        <div className='navLinks'>
            <div className='link'>
                <Link onClick={props.navModalToFalse} to='about'>
                    <h1>About</h1>
                </Link>
            </div>
                       
            <div className='link'>
                <Link onClick={props.navModalToFalse} to='/'>
                    <h1>My Work</h1> 
                </Link>
            </div>

            <div className='link'>
                <Link onClick={props.navModalToFalse} to='contact'>
                    <h1>Contact Me</h1>
                </Link>
            </div>

            <div id='resume' className='link'>
                        
            </div>   
        </div>
    );
}
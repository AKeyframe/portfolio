import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function About(props){
    return(
        <div>
            <div id='about'>
                <div>
                    <h1 className='title'>About Me</h1>
                </div>
                
                <div>
                    <p>
                        A Software Engineer, Designer, and 3D artist who creates clean, efficient, and stylish solutions to not so stylish problems. Consistently contribute quality solutions to teams and clients. Bring that which only lives within our minds and imaginations to life, giving the world a bit more of the fantastical to enjoy.
                    </p>
                </div>
                <div className='icons'>
                    <div>
                        <a href='https://www.linkedin.com/in/alec-kagebein/'>
                            <AiFillLinkedin className='rIcon'/>
                        </a>
                    </div>
                    <div>
                        
                        <a href='https://github.com/AKeyframe'>
                            <AiFillGithub className='rIcon'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Contact(props){
    return(
        <div>
            <div id='contact'>
                <h1>Contact Page</h1>
                <h1>alec.kagebein@gmail.com</h1>
                <h1>Resume</h1>
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
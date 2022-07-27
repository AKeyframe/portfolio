import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';


export default function Contact(props){
    return(
        <div>
            <div id='contact'>
                <h1 className='title'>Contact Me</h1>
                <p>I'm currently exploring different oppertunities, if you think I'd be a good fit for yours, or if you just feel like chatting, give me a shout. While the best way to get in contact with me is via email: <span className='hilight'>alec.kagebein@gmail.com</span>, feel free to message me on linkedin as well!</p>
                <h1></h1>
               
                <div className='icons'>
                    <div>
                        <a href='https://docs.google.com/document/d/111glwIqPnYDW5kiB1TSpB_SGxICC53Qj5gyazp6KR4w/edit?usp=sharing'>
                            <BsFileEarmarkPersonFill className='rIcon'/>
                        </a>
                    </div>

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
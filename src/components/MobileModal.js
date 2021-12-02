import { ImChrome } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';

import '../App.scss';

export default function MobileModal(props){

    function displayLinks(){
        if(props.live !== 'empty' && props.gitTwo !== 'empty'){
            return(
                <div className='mobileModalLinks'>
                    <div className='link'>
                        <a href={props.live}>
                            <ImChrome className='rIconModal'/>Deployed
                        </a>
                    </div>

                    <div className='link'>
                        <a href={props.gitOne}>
                            <AiFillGithub className='rIconModal'/>Frontend
                        </a>
                    </div>

                    <div className='link'>
                        <a href={props.gitTwo}>
                            <AiFillGithub className='rIconModal'/>Backend
                        </a>
                    </div>
                </div>
            );
        } else if(props.live !== 'empty' && props.gitOne !== 'empty' && props.gitTwo === 'empty'){ 
            return(
                <div className='mobileModalLinks'>
                    <div className='link'>
                        <a href={props.live}>
                            <ImChrome className='rIconModal'/>Deployed
                        </a>
                    </div>

                    <div className='link'>
                        <a href={props.gitOne}>
                            <AiFillGithub className='rIconModal'/>GitHub
                        </a>
                    </div>
                </div>
            );
        
        } else if(props.live === 'empty' && props.gitTwo !== 'empty' && props.gitOne!== 'empty'){
            return(
                <div className='mobileModalLinks'>
                    <div className='link'>
                        <a href={props.gitOne}>
                            <AiFillGithub className='rIconModal'/>Frontend
                        </a>
                    </div>

                    <div className='link'>
                        <a href={props.gitTwo}>
                            <AiFillGithub className='rIconModal'/>Backend
                        </a>
                    </div>
                </div>
            );
        }
    } 

    return(
        <div>
            <div className='mobileModal'>
                <div className='gallery'>
                    <p>Updated Images Here</p>
                    <p>Possible Carousel</p>
                </div>

                <div>
                    <h2 className='modalTitle'>{props.name}</h2>
                </div>
                {displayLinks()}
                
            </div>
        </div>
    );
}
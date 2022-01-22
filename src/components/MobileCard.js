import { useState } from "react";
import Modal from "react-modal";
import { ImChrome } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';

import '../App.scss'

//Components
import MobileModal from "./MobileModal";

export default function MobileCard(props){

   

    const [modal, setModal] = useState(false);

    function toggleModal(){setModal(!modal);}

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

    function displayTags(){
        return props.tags.map((t, i) => {
            return(
                <div key={i} className='tag'>
                    <p>{t}</p>
                </div>
            );
        });
    }

    return(
        <div>
            <div className='mobileCard background'>
                <div className='title'>
                    <h2>{props.name}</h2>
                </div>
                <Modal isOpen={modal} 
                        ariaHideApp={false}
                        onRequestClose={toggleModal}
                        style={{
                            overlay: {
                                
                                backgroundColor: 'rgba(0, 0, 0, 0.75)'
                            },
                            content : {
                                width: '65vw',
                                height: '80vh',
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '50%',
                                transform: 'translate(-50%, -50%)',
                                border: 'solid black',
                                backgroundColor       : '#33103f'      
                            },
                        }}

                        
                        //style={customStyles}
                >
                    <MobileModal 
                        pos={props.pos}
                        name={props.name}
                        about={props.about}
                        photos={props.photos}
                        live={props.live}
                        gitOne={props.gitOne}
                        gitTwo={props.gitTwo}
                        tags={props.tags}
                    />
                </Modal>

                <div>
                    <p><span className='ind'></span>{props.about}</p>
                </div>
                
                <div className='tags'>
                    {displayTags()}
                </div>
                <div>
                    {displayLinks()}
                </div>
            </div>
        </div>
    );
}


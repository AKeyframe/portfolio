import { useState } from "react";
import { FaFileExcel } from "react-icons/fa";
import { ImChrome } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import Modal from "react-modal";

import '../App.scss'

//Components
import CardModal from "./CardModal";

export default function DisplayCard(props){
    console.log(props);
    const [modal, setModal] = useState(false);

    function modalToFalse(){setModal(false);}
    function modalToTrue(){setModal(true);}

    function checkIfMoblieOnly(){
        if(props.name === 'Dating App'){
            return(
                <div className='mobileImgDisplay'>
                    <img className='displayImage MID' 
                        src={props.photos[0]}
                        onClick={modalToTrue}
                    />
                    <img className='displayImage MID'
                        src={props.photos[1]}
                        onClick={modalToTrue}
                    />
                </div>
            );
        } else{
            return(
                <img className='displayImage' 
                    src={props.photos[0]}
                    onClick={modalToTrue}
                />
            );
        }
    }

    function displayLinks(){
        if(props.live !== 'empty' && props.gitTwo !== 'empty'){
            return(
                <div className='links'>
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
                <div className='links'>
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
                <div className='links'>
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

    function checkEven(){
        if(props.even){
            return(
                <div className='card'>
                    <div className='cardImage'>
                        {checkIfMoblieOnly()}
                    </div>
                    <div className='cardText'>
                        <div>
                            <h2 className='title'>{props.name}</h2>
                        </div>

                        <div>
                            <p>{props.about}
                            </p>
                        </div>
                        <div className='tags'>
                            {displayTags()}
                        </div>
                        {displayLinks()}
                    </div>
                </div>
            );
        } else {
            return(
                <div className='card'>
                    <div className='cardText l'>
                        <div>
                            <h2 className='title'>{props.name}</h2>
                        </div>

                        <div>
                            <p>{props.about}
                            </p>
                        </div>
                        <div className='tags'>
                            {displayTags()}
                        </div>
                        {displayLinks()}
                    </div>
                    <div className='cardImage'>
                        {checkIfMoblieOnly()}
                    </div>
                    
                </div>
            );
        }
    }

    return(
        <div>
                {checkEven()}

                <Modal isOpen={modal} 
                        ariaHideApp={false}
                        onRequestClose={modalToFalse}
                        style={{
                            overlay: {
                                
                                backgroundColor: 'rgba(0, 0, 0, 0.75)'
                            },
                            content : {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '60vw',
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
                    <CardModal 
                        pos={props.pos}
                        name={props.name}
                        about={props.about}
                        photos={props.photos}
                        mobilePhotos={props.mobilePhotos}
                        live={props.live}
                        gitOne={props.gitOne}
                        gitTwo={props.gitTwo}
                        tags={props.tags}
                    />
                </Modal>
            
        </div>
    );
}

// const customStyles = {
//     content : {
//         // top                   : '50%',
//         // left                  : '50%',
//         // right                 : 'auto',
//         // bottom                : 'auto',
//         // marginRight           : '-50%',
//         // transform             : 'translate(-50%, -50%)',
//         backgroundColor       : '#33103f'      
//       }
//   };
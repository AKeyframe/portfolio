import { useState } from "react";
import Modal from "react-modal";

import '../App.scss'

//Components
import CardModal from "./CardModal";

export default function DisplayCard(props){

    const [modal, setModal] = useState(false);

    function modalToFalse(){setModal(false);}
    function modalToTrue(){setModal(true);}


    return(
        <div>
            <div className='card'>
                <div className='cardImage'>
                    <img className='displayImage' 
                         src={props.photos[0]}
                         onClick={modalToTrue}
                    />
                </div>
                <Modal isOpen={modal} 
                        ariaHideApp={false}
                        onRequestClose={modalToFalse}
                        style={{
                            overlay: {
                                
                                backgroundColor: 'rgba(0, 0, 0, 0.75)'
                            },
                            content : {
                                width: '55vw',
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
                        live={props.live}
                        gitOne={props.gitOne}
                        gitTwo={props.gitTwo}
                        tags={props.tags}
                    />
                </Modal>
            </div>
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
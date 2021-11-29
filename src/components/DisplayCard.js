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
                <div className='cardImage' onClick={modalToTrue}>
                    <img className='displayImage' src={props.photos[0]} />
                </div>
                <Modal isOpen={modal} 
                        ariaHideApp={false}
                        onRequestClose={modalToFalse}

                        
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
//         top                   : '50%',
//         left                  : '50%',
//         right                 : 'auto',
//         bottom                : 'auto',
//         marginRight           : '-50%',
//         transform             : 'translate(-50%, -50%)',
//         backgroundColor       : '#F0AA89'      
//       }
//   };
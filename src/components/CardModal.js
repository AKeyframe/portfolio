import { useState } from 'react';

import { BsFillArrowLeftCircleFill, 
         BsFillArrowRightCircleFill } from 'react-icons/bs';

import '../App.scss';

export default function CardModal(props){

    const [focus, setFocus] = useState(0);

    function prevImg(){
       if(focus === 0){
           setFocus(prev => props.photos.length-1);
       } else {
           setFocus(prev => prev-1);
       }
    }

    function nextImg(){
        if(focus === props.photos.length-1){
            setFocus(0);
        } else {
            setFocus(prev => prev+1);
        }
    }


    function checkIfMobile(){
        if(props.name === 'Dating App'){
            return(
                <div className='carousel'>
                    <BsFillArrowLeftCircleFill 
                        onClick={prevImg} 
                        className='arrow'
                    />
                    <img className='modalImage MI' src={props.photos[focus]} />
                    < BsFillArrowRightCircleFill 
                        onClick={nextImg}
                        className='arrow'
                    />
                </div>
                
            );
        } else{
            return(
                <div className='carousel'>
                    <BsFillArrowLeftCircleFill 
                        onClick={prevImg}
                        className='arrow'
                    />

                    <img className='modalImage' src={props.photos[focus]} />
                    < BsFillArrowRightCircleFill 
                        onClick={nextImg}
                        className='arrow'
                    />
                </div>
            );
        }
        
    }

    return(
        <div className='cardModal'>
            {checkIfMobile()}
            
        </div>
       
    );
}
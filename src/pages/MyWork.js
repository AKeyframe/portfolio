import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';

import '../App.scss'

//Components
import MobileCard from "../components/MobileCard";
import DisplayCard from "../components/DisplayCard";

//Data
import {data} from '../projects/ProjectData'
import Intro from '../components/Intro';

export default function MyWork(props){
    const WIDTH = window.screen.width;

    function displayIcons(){
        return(
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
        );
    }

    function mobileDisplayProjects(){
        return data.map((proj, i) => {
            return <MobileCard 
                        key={i}
                        pos={i}
                        name={data[i].name}
                        about={data[i].about}
                        photos={data[i].photos}
                        live={data[i].live}
                        gitOne={data[i].gitOne}
                        gitTwo={data[i].gitTwo}
                        tags={data[i].tags}
                   />
        });
    }

    function displayProjects(){
        return data.map((proj, i) => {
            let even = i % 2 === 0 ? true : false;
            return  <DisplayCard 
                        key={i}
                        pos={i}
                        name={data[i].name}
                        about={data[i].about}
                        photos={data[i].photos}
                        mobilePhotos={data[i].mobilePhotos}
                        live={data[i].live}
                        gitOne={data[i].gitOne}
                        gitTwo={data[i].gitTwo}
                        tags={data[i].tags}
                        even={even}
                    />
        });
        
    }

    if(WIDTH < 650){
        return(
            <div>
                <div id='work'>
                    <Intro />
                    {mobileDisplayProjects()}
                    {displayIcons()}
                    
                </div>
            </div>
        );

    } else if(WIDTH >= 650){
        return(
            <div>
                <div id='work'>
                    <Intro />
                    {displayProjects()}
                </div>
            </div>
        );
    }
}
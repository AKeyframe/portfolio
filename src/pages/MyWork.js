import '../App.scss'

//Components
import MobileCard from "../components/MobileCard";
import DisplayCard from "../components/DisplayCard";

//Data
import {data} from '../projects/ProjectData'

export default function MyWork(props){
    const WIDTH = window.screen.width;

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
            return  <DisplayCard 
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

    if(WIDTH < 650){
        return(
            <div>
                <div id='work'>
                    {mobileDisplayProjects()}
                </div>
            </div>
        );

    } else if(WIDTH >= 650){
        return(
            <div>
                <div id='work'>
                    {displayProjects()}
                </div>
            </div>
        );
    }
}
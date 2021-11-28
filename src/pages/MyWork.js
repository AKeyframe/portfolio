import DisplayCard from "../components/DisplayCard";

import {data} from '../projects/ProjectData'
import '../App.scss'

export default function MyWork(props){

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

    return(
        <div>
            <div id='work'>
                {displayProjects()}
            </div>
        </div>
    );
}
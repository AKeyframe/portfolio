export default function MobileCard(props){

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

                <div>
                    <p><span className='ind'></span>{props.about}</p>
                </div>
                
                <div className='tags'>
                    {displayTags()}
                </div>
            </div>
        </div>
    );
}
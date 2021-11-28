import '../App.scss'

export default function CardModal(props){


    function displayLinks(){
        if(props.live !== 'empty' && props.gitTwo !== 'empty')
            return(
                <div className='modalPartThree'>
                    <div className='link'>
                        <a href={props.live}>Deployed</a>
                    </div>

                    <div className='link'>
                        <a href={props.gitOne}>Frontend</a>
                    </div>

                    <div className='link'>
                        <a href={props.gitTwo}>Backend</a>
                    </div>
                </div>
            );
    }

    return(
        <div>
            <div className='cardModal'>
                <div className='modalPartOne'>
                    <img className='modalImage' src={props.photos} />
                </div>

                <div className='modalPartTwo'>
                    <div>
                        <h2>{props.name}</h2>
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci. Amet mauris commodo quis imperdiet massa. Volutpat consequat mauris nunc congue nisi.
                        </p>
                    </div>

                    {displayLinks()}
                </div>
            </div>

            
            
            
        </div>
    );
}
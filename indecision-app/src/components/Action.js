import React from 'react'

const Action = (props) =>(
        <div> 
            <button onClick= 
                {props.handlePick} 
                disabled={!props.bOptions}> 
                What should I do?
            </button> 
        </div>
); 


export default Action;

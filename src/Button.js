import React from 'react';

const Button = (props) =>{
    return (
                <React.Fragment>
                    <div>
                    <button onClick={props.onClick}>Click Me!</button> &nbsp; &nbsp;
                    <button onClick={props.onClear}>Clear All</button>
                    </div>
                </React.Fragment>
           )    
}

export default Button;

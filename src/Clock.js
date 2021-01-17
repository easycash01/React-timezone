import React from 'react';


function Clock (props){
console.log(props);

const time_zone = props.timezone;
console.log(time_zone);
var ora = Date.now() + time_zone * 3600 * 1000;


function getDate(d){
    
    return  d.toLocaleDateString() + ' ' + d.toLocaleTimeString() ;
}


    return(
        <h1>{props.country + ' ' + getDate(new Date(ora))}</h1>
    )
};


export default Clock;
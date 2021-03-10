import React from 'react';


function Clock (props){
console.log(props);

const time_zone = props.timezone;
console.log(time_zone);
var oraTimezone = Date.now() + time_zone * 3600 * 1000;

//funzione che mi restituisce la data e l orario
function getDate(d){
    return  d.toLocaleDateString() + ' ' + d.toLocaleTimeString() ;
}
    return(
        <h1>{props.country + ' ' + getDate(new Date(oraTimezone))}</h1>
    )
};






export default Clock;


import React from "react";
import mapfun from './mapfun.css'
function Map1(){
    const pnames=['Mercury','Venus','Earth','Mars','Jupiter','Uranus','Neptune'];
    return(
        <div> 
            {
                pnames.map(name => <table><tr><td>{name}</td></tr></table>)
            }
        </div>
    )
    
}
export default Map1
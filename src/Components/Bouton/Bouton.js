import React from "react";


const bouton = (props)=>{
    const btnCss = `btn btn-info m-2`;
    
    return(
          
        <button
            className={btnCss} 
            onClick={props.clic}
            style={props.estSeclectionne ? {opacity:1}  : {opacity:0.7}}
             >
               { props.children }
        </button >
        
    )

} 
export default bouton;
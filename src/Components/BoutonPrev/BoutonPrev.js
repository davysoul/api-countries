import React from "react";


const BoutonPrev = (props)=>{
    const btnCss = `btn btn-info m-2`;
    
    return (
        <button className={btnCss} onClick ={props.clicPrev}  disabled={props.currentItem ===1 }>{props.children}</button>
    )
}
export default BoutonPrev;
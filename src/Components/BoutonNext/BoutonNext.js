import React from "react";


const BoutonNext = (props)=>{
    const btnCss = `btn btn-info m-2`;
   
    return (
        <button className={btnCss} onClick ={props.clicNext}  disabled={props.currentItem ===props.total}>{props.children}</button>
    )
}
export default BoutonNext;
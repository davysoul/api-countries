import React from "react";
import classes from "../TitreH1/TitreH1.module.css";


const titreH1 = (props)=>{
    const classesCss = `${classes.font_family} border border-dark bg-primary p-2 m-2 text-white text-center`
    return(
        <h1 className={classesCss}>{props.children}</h1>
    )
}
export default titreH1;
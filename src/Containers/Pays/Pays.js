import React from "react";


const Pays = (props)=>{

    return (

        <div className="row g-2 border m-2 ">
            <div className="col-4 ">
                <img src={props.unPays.drapeau} className="p-2" width="100%" />
            </div>
            <div className="col ">
                <h2>{props.unPays.nomFrancais.common}</h2>
                <div>Capitale:{props.unPays.capitale}</div>
                <div>Region:{props.unPays.region}</div>
            </div>

        </div>
    )
}
export default Pays;
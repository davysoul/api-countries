import React from "react";

import Bouton from "../../Components/Bouton/Bouton";
const Pagination = (currentPage,totalPages)=>{

    return (

        <div>
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                </li>
                <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
               
                
                <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        </div>
    )
}
export default Pagination;
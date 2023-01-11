import React, { Component } from "react";
import TitreH1 from "../../Components/TitreH1/TitreH1";
import Bouton from "../../Components/Bouton/Bouton";
import axios from "axios";
import Pays from "../Pays/Pays";
import BoutonPrev from "../../Components/BoutonPrev/BoutonPrev";
import BoutonNext from "../../Components/BoutonNext/BoutonNext";
class PaysManager extends Component {
    state = {
        listePays: [],
        loading: false,
        regionSelectionnee: null,
        currentPage: 1,
        btnClique : 1

    }

    componentDidMount = () => {
        this.handleSelectionPaysParZone('all');

    }


    handleSelectionPaysParZone = (zone) => {
        let param = "";
        if (zone === "all") param = zone;
        else param = `region/${zone}`;
        this.setState({ loading: true });
        axios.get("https://restcountries.com/v3.1/" + param)
            .then(reponse => {

                const lesPays = reponse.data.map(pays => {

                    return {
                        nom: pays.name.common,
                        nomFrancais: pays.translations.fra,
                        capitale: pays.capital,
                        region: pays.continents,
                        drapeau: pays.flags.png
                    };

                });

                this.setState({
                    listePays: lesPays,
                    loading: false,
                    regionSelectionnee: zone
                });


            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            });

    }
    handlePrevClick = () => {
        if (this.state.currentPage > 1)
            this.setState({
                currentPage: this.state.currentPage - 1,
                
            }
            );
         
    }
    handleNextClic = ()=>{
        if (this.state.currentPage < this.state.listePays.length / 10)
            this.setState({
                currentPage: this.state.currentPage + 1,
                
            });
            
    }
    render() {
        const pagination = [];
        let totalPages =0;
        let listeDesPays = null;
        const itemsPerPage = 10;
        if (this.state.listePays) {
            totalPages = Math.ceil(this.state.listePays.length / itemsPerPage) ;
            //if (this.state.listePays.length % itemsPerPage !== 0) totalPages++;
            for (let i = 1; i <= totalPages; i++) {
                pagination.push(
                    <Bouton
                        key={i}
                        estSeclectionne={this.state.currentPage === i}
                        clic={() => this.setState({ currentPage: i })}
                    >
                        {i}
                    </Bouton>
                )
            }
            const debutIndex =(this.state.currentPage-1)*itemsPerPage;
            const finIndex = debutIndex + itemsPerPage;
            const listeReduite = this.state.listePays.slice(debutIndex,finIndex);
            listeDesPays = listeReduite.map(pays => {

                return (
                    <div className="col-12 col-md-6" key={pays.nom}>
                        <Pays unPays={pays} />
                    </div>)
            })
        }
        return (
            <div className="container">

                <TitreH1>Liste des pays du monde</TitreH1>
                <Bouton
                    clic={() => this.handleSelectionPaysParZone("all")}
                    estSeclectionne={this.state.regionSelectionnee === "all"}
                >Tous</Bouton>
                <Bouton
                    clic={() => this.handleSelectionPaysParZone("Europe")}
                    estSeclectionne={this.state.regionSelectionnee === "Europe"}

                >Europe</Bouton>
                <Bouton
                    clic={() => this.handleSelectionPaysParZone("Africa")}
                    estSeclectionne={this.state.regionSelectionnee === "Africa"}
                >Afrique</Bouton>
                <Bouton
                    clic={() => this.handleSelectionPaysParZone("Asia")}
                    estSeclectionne={this.state.regionSelectionnee === "Asia"}
                >Asie</Bouton>
                <Bouton
                    clic={() => this.handleSelectionPaysParZone("America")}
                    estSeclectionne={this.state.regionSelectionnee === "America"}
                >Amerique</Bouton>
                <Bouton
                    clic={() => this.handleSelectionPaysParZone("Oceania")}
                    estSeclectionne={this.state.regionSelectionnee === "Oceania"}

                >Oceanie</Bouton>
                Nombre des pays: <span className="badge rounded-pill bg-success">{this.state.listePays.length}</span>
                {
                    this.state.loading
                        ? <div>Chargement en cours....</div>
                        : <div className="row g-2 ">
                            {listeDesPays}

                        </div>
                }

                <div className="pagination" >
                    <BoutonPrev className="page-link" clicPrev ={this.handlePrevClick} currentItem ={this.state.currentPage} >&laquo;</BoutonPrev>
                    {
                        pagination.map(page => {
                            return page
                        })
                    }
                    <BoutonNext className="page-link" clicNext ={this.handleNextClic} currentItem ={this.state.currentPage} total ={totalPages}>&raquo;</BoutonNext>
                </div>
            </div>
        );
    }

}
export default PaysManager;
import React from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import CardPersonajes from "../../Compartidos/CardPersonajes.jsx";

export const Navbar = () => {const {store,actions}=useContext(Context);
	return  (<>
        <div className="row my-2 bg-secondary sticky-top">

            <div className="col-md-2">
                <img className="img-fluid logo" src="https://am22.mediaite.com/tms/cnt/uploads/2015/10/2000px-Star_Wars_Logo.svg_-640x386.png" >
                    
                </img>
            </div>

            <div className="col-md-8">
                <ul id="ulHeader" className="nav d-flex justify-content-around">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Personajes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/planetas">Planetas</Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-2">
                <div className="dropleft float-right">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                        Favoritos<span id="spanNum"><p className="font-weight-bold" id="pNum">{store.favorite.length}</p></span>
                    </button>
                    <div className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                        {
                            store.favorite.length === 0 ?

                                <a className="dropdown-item" href="#">No hay favoritos!</a>
                                :
                                store.favorite.map((ele, i) => {
                                    return <a key={i} className="dropdown-item">{ele}<i className="fas fa-trash float-right" onClick={() => actions.removeFavorite(ele)}></i></a>
                                })
                        }
                    </div>
                </div>



            </div>
        </div>
    </>)
}
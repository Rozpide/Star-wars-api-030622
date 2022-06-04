import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../js/store/appContext.js";

const CardPersonajes = (props) => {
    const {store, actions} = useContext(Context);
    
    return (
        <div className="col-md-3 my-4 ">
            <div className="card border-0">
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + (props.personaje.url.replace("http://swapi.dev/api/people/", "").replace("/", "")) + ".jpg"} id="fotoHeaderCard" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center"><ins>{props.personaje.name}</ins></h5>
                    <p className="card-text"><b>Gender: </b><i>{props.personaje.gender}</i></p>
                    <p className="card-text"><b>HairColor: </b><i>{props.personaje.hair_color}</i></p>
                    <p className="card-text"><b>EyesColor: </b><i>{props.personaje.eye_color}</i></p>
                </div>
                <div className="card-footer">
                    <Link to={`/personaje/${props.personaje.url.replace("http://swapi.dev/api/people/", "").replace("/", "")}`} className="btn btn-outline-primary" personaje={props}>Learn More!</Link>

                    {
                        props.a.length>0?
                        <button className="btn btn-outline-warning float-right corazonActivo" onClick={()=>actions.removeFavorite(props.personaje.name)}><i className="far fa-heart" ></i></button>
                        :
                        <button className="btn btn-outline-warning float-right" onClick={(e)=>actions.addFavorite(props.personaje.name, e)}><i className="far fa-heart" ></i></button>

                        
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(CardPersonajes);
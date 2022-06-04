import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

import "../../styles/demo.css";
export const Personaje = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacter("https://swapi.dev/api/people/" + props.match.params.id)
    }, [])

    return (<>

        {
            store.people === null ?
                <div className="row">
                   
                </div>
                : <>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img id="fotoCardPersonaje" src={`https://swapi.dev/api/people/1/ ${props.match.params.id}.jpg`} className="card-img-top" />
                        </div>


                        <div className="col-md-6 text-center">
                            <h1>{store.people.name}</h1>
                            <p className="text-left">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                        </div>

                    </div>

                    <hr className="separador" />

                    <div className="row text-center">
                        <div className="col-md-2"><b>Name:</b><p>{store.people.name}</p></div>
                        <div className="col-md-2"><b>BirthYear:</b><p>{store.people.birth_year}</p></div>
                        <div className="col-md-2"><b>Gender:</b><p>{store.people.gender}</p></div>
                        <div className="col-md-2"><b>Height:</b><p>{store.people.height}</p></div>
                        <div className="col-md-2"><b>SkinColor:</b><p>{store.people.skin_color}</p></div>
                        <div className="col-md-2"><b>EyeColor:</b><p>{store.people.eye_color}</p></div>
                    </div>
                </>
        }
    </>
    )
}
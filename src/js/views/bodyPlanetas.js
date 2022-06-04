import React, { useState, useEffect, useContext } from "react";

import  CardPlanetas  from "../../Compartidos/CardPlanetas.jsx";
import { Context } from "../store/appContext";
import Footer from "../../Compartidos/footer.js";

export const BodyPlanetas = () => {

    const { store, actions } = useContext(Context)



    return (
        <>
            <div className="row ">
                {
                    store.planets !== null ?
                        store.planets.results.map((planeta, index) => {
                            let a= store.favorite.filter((item=>item===planeta.name))
                            return <CardPlanetas key={index} planeta={planeta} a={a} />
                        }) 
                       :<spinner></spinner>
                }
            </div>
                <Footer />
        </>
    )
}
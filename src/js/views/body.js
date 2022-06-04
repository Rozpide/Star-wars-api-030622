import React, { useContext } from "react";

import Footer from "../../Compartidos/footer.js";
import  CardPersonajes  from "../../Compartidos/CardPersonajes.jsx";
import { Context } from "../store/appContext.js";



export const Body = () => {
    const { store, actions } = useContext(Context);





    return (
        <>
            <div className="row">
                {
                    //pregunto si la VARIABLE es distinto a null, no el results que me trae el fetch
                    store.characters !== null ?
                        store.characters.results.map((personaje, index) => {
                            let a=store.favorite.filter((item)=>item===personaje.name);
                            return <CardPersonajes key={index} personaje={personaje} i={index+1} a={a} />
                        })
                     :<></>  
                    }
            </div>
            <Footer />
        </>)
}
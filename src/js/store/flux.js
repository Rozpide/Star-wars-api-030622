import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: null,
            planets: null,
            species: null,
            starships: null,
            starships:null,
            favorite: [],
        },
		actions: {
			getCharacters: async (url) => {
                const resp = await fetch("https://www.swapi.tech/api/people");
                const dataCharacters = await resp.json();
                setStore({
                    people: dataCharacters
                })
            },
            getPlanets: async (url) => {
                const resp = await fetch("https://www.swapi.tech/api/planets");
                const dataPlanets = await resp.json();
                setStore({
                    planet: dataPlanets
                })
            },
           
            removeFavorite: (personaje) => {
                setStore({
                    favorite: getStore().favorite.filter(fav => fav !== personaje)
                })
            }




        }
	};
};

export default getState;

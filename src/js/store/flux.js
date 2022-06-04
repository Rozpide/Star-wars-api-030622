const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: null,
            planets: null,
            character: null,
            planet: null,
            favorite: [],
        },
		actions: {
			getCharacters: async (url) => {
                const resp = await fetch("https://www.swapi.tech/api/people");
                const dataCharacters = await resp.json();
                setStore({
                    characters: dataCharacters
                })
            },
            getPlanets: async (url) => {
                const resp = await fetch("https://www.swapi.tech/api/planets");
                const dataPlanets = await resp.json();
                setStore({
                    planets: dataPlanets
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

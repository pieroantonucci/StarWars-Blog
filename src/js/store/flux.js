const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				const response = await fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();
				setStore({ characters: data.results });
			},

			getPlanets: async () => {
				const planets = await fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const dataPlanets = await planets.json();
				setStore({ planets: dataPlanets.results });
			},

			getVehicles: async () => {
				const vehicles = await fetch("https://swapi.dev/api/vehicles/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data3 = await vehicles.json();
				setStore({ vehicles: data3.results });
			},

			addItem: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			removeItem: name => {
				const store = getStore();
				const newFavorites = store.favorites.filter(i => i !== name);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;

import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getCharacters();
		actions.getPlanets();
		actions.getVehicles();
	}, []);
	return (
		<>
			<div className="container">
				<h1>Characters</h1>
				<div className="scrolling-wrapper">
					{store.characters.map((item, index) => {
						return (
							<div key={index} className="card" style={{ width: "18rem" }}>
								<img
									className="card-img-top"
									src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
									alt="Card image cap"
									style={{ width: "18rem" }}
								/>
								<div className="card-body">
									<h6 className="card-title">{item.name}</h6>
									<p className="card-text">
										Gender: {item.gender} <br />
										Hair Color: {item.hair_color} <br />
										Eye-Color: {item.eye_color}
									</p>
									<Link to={`/characters/${index}`}>
										<a className="btn btn-outline-primary">Learn more!</a>
									</Link>
									<a className="btn btn-outline-warning" onClick={() => actions.addItem(item.name)}>
										<i className="far fa-heart" />
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<br />
			<div className="container">
				{/* <span>{JSON.stringify(store.planets)}</span> */}
				{/* <span>{JSON.stringify(store.favorites)}</span> */}
				<h1>Planets</h1>
				<div className="scrolling-wrapper">
					{store.planets.map((item, index) => {
						return (
							<div key={index} className="card" style={{ width: "18rem" }}>
								<img
									className="card-img-top"
									src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
									alt="Card image cap"
									style={{ width: "18rem" }}
								/>
								<div className="card-body">
									<h6 className="card-title">{item.name}</h6>
									<p className="card-text">
										Climate: {item.climate} <br />
										Population: {item.population} <br />
										Terrain: {item.terrain}
									</p>
									<Link to={`/planets/${index}`}>
										<a className="btn btn-outline-primary">Learn more!</a>
									</Link>
									<a className="btn btn-outline-warning" onClick={() => actions.addItem(item.name)}>
										<i className="far fa-heart" />
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<br />
			<div className="container">
				{/* <span>{JSON.stringify(store.planets)}</span> */}
				{/* <span>{JSON.stringify(store.favorites)}</span> */}
				<h1>Vehicles</h1>
				<div className="scrolling-wrapper">
					{store.vehicles.map((item, index) => {
						return (
							<div key={index} className="card" style={{ width: "18rem" }}>
								<img
									className="card-img-top"
									src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg"
									alt="Card image cap"
									style={{ width: "18rem" }}
								/>
								<div className="card-body">
									<h6 className="card-title">{item.name}</h6>
									<p className="card-text">
										Model: {item.model} <br />
										Passengers: {item.passengers} <br />
										Crew: {item.crew}
									</p>
									<Link to={`/vehicles/${index}`}>
										<a className="btn btn-outline-primary">Learn more!</a>
									</Link>
									<a className="btn btn-outline-warning" onClick={() => actions.addItem(item.name)}>
										<i className="far fa-heart" />
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

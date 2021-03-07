import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailPlanets = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getPlanets();
	}, []);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img src="https://static.wikia.nocookie.net/esstarwars/images/a/a5/Dantooine_Resistance.jpg" />
					</div>
					<div className="col-6">
						<h1 className="titleDetail">{store.planets[theid].name}</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque odio, mi bibendum felis
							et semper fames dapibus dictum, nisl curabitur dictumst malesuada fusce metus habitasse
							blandit. Lacus curae volutpat varius egestas mus augue, elementum ac taciti laoreet purus
							eros etiam, tempor in quis dapibus libero. Arcu nascetur scelerisque convallis phasellus
							nisl eu tincidunt velit ligula, quis sagittis urna sodales auctor metus varius ultrices
							fames hac, felis conubia nam bibendum viverra gravida a fusce.
						</p>
					</div>
				</div>
				<hr></hr>
				<div className="row">
					<div className="col">
						<p>Name</p>
						<br />
						<p>{store.planets[theid].name}</p>
						<br />
					</div>
					<div className="col">
						<p>Climate</p>
						<br />
						<p>{store.planets[theid].climate}</p>
						<br />
					</div>
					<div className="col">
						<p>Orbital Period</p>
						<br />
						<p>{store.planets[theid].orbital_period}</p>
					</div>
					<div className="col">
						<p>Population</p>
						<br />
						<p>{store.planets[theid].population}</p>
					</div>
					<div className="col">
						<p>Terrain</p>
						<br />
						<p>{store.planets[theid].terrain}</p>
					</div>
					<div className="col">
						<p>Gravity</p>
						<br />
						<p>{store.planets[theid].gravity}</p>
					</div>
				</div>
			</div>
		</>
	);
};

DetailPlanets.propTypes = {
	match: PropTypes.object
};

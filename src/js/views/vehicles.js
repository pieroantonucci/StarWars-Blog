import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailVehicles = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getVehicles();
	}, []);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img src="https://i.blogs.es/5382dc/death-star/450_1000.jpg" />
					</div>
					<div className="col-6">
						<h1 className="titleDetail">{store.vehicles[theid].name}</h1>
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
						<p>{store.vehicles[theid].name}</p>
						<br />
					</div>
					<div className="col">
						<p>Model</p>
						<br />
						<p>{store.vehicles[theid].model}</p>
						<br />
					</div>
					<div className="col">
						<p>Passengers</p>
						<br />
						<p>{store.vehicles[theid].passengers}</p>
					</div>
					<div className="col">
						<p>Crew</p>
						<br />
						<p>{store.vehicles[theid].crew}</p>
					</div>
					<div className="col">
						<p>Cargo Capacity</p>
						<br />
						<p>{store.vehicles[theid].cargo_capacity}</p>
					</div>
					<div className="col">
						<p>Consumables</p>
						<br />
						<p>{store.vehicles[theid].consumables}</p>
					</div>
				</div>
			</div>
		</>
	);
};

DetailVehicles.propTypes = {
	match: PropTypes.object
};

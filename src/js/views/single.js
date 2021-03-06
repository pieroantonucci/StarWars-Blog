import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailCharacters = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	useEffect(() => {
		actions.getCharacters();
	}, []);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img src="https://www.latercera.com/resizer/HDh7AGTUkFcljXvdxAyrwep19O0=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/ZMQ6TEMTCJBAFBUHC2OXHKU3NE.jpg" />
					</div>
					<div className="col-6">
						<h1 className="titleDetail">{store.characters[theid].name}</h1>
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
						<p>{store.characters[theid].name}</p>
						<br />
					</div>
					<div className="col">
						<p>Birth Year</p>
						<br />
						<p>{store.characters[theid].birth_year}</p>
						<br />
					</div>
					<div className="col">
						<p>Height</p>
						<br />
						<p>{store.characters[theid].height}</p>
					</div>
					<div className="col">
						<p>Gender</p>
						<br />
						<p>{store.characters[theid].gender}</p>
					</div>
					<div className="col">
						<p>Skin Color</p>
						<br />
						<p>{store.characters[theid].skin_color}</p>
					</div>
					<div className="col">
						<p>Eye Color</p>
						<br />
						<p>{store.characters[theid].eye_color}</p>
					</div>
				</div>
			</div>
		</>
	);
};

DetailCharacters.propTypes = {
	match: PropTypes.object
};

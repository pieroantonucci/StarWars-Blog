import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {}, []);
	return (
		<div className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
						className="logo"
						style={{ marginLeft: "100px" }}></img>
				</span>
			</Link>
			<div className="navbar-nav ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						style={{ marginRight: "100px" }}
						id="dropdownMenuButton"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
						<a className="badge badge-secondary"> {store.favorites.length} </a>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{/* {JSON.stringify(store.favorites)} */}
						{store.favorites.map((item, index) => {
							return (
								<li key={index} className="dropdown-item" href="#">
									{item}
									<i className="fas fa-trash-alt" onClick={() => actions.removeItem(item)}></i>
								</li>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

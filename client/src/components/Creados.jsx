import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import * as A from "../redux/actions";
import Tarjeta from "./Tarjeta";
import "./styles/creados.css";
export default function Creados() {
	const dispatch = useDispatch();
	const AllCharacters = useSelector((state) => state.characters);

	useEffect(() => {
		dispatch(A.getCharacters());
	}, [dispatch]);

	return (
		<main className="creados">
			<br />
			<h1> ESTAS EN Personajes Creados </h1>
			{AllCharacters.length ? (
				<section className="Tarjetas">
					{AllCharacters.map((e) => {
						if (e.createdInDb) {
							return (
								<Tarjeta
									key={e.id}
									id={e.id}
									image={e.image}
									name={e.name}
									origin={e.origin}
									species={e.species}
									episode={e.episode}
								/>
							);
						} else return "";
					})}
				</section>
			) : (
				<div className="loading">
					<img className="loading" src="https://c.tenor.com/6Tc-POkXDgYAAAAC/epic-rick-and-morty.gif" alt="portal" />
					<h2 className="loading"> Loading...</h2>
				</div>
			)}
		</main>
	);
}

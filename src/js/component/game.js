import React, { useState } from "react";
import Board from "../component/board";
import Player from "../component/player";

export function Game() {
	const [view, setView] = useState("2");
	const player1 = <Player name="Player 1" figure="x" />;
	const player2 = <Player name="Player 2" figure="o" />;

	function render() {
		if (view == 1) {
			return <h1>View es 1</h1>;
		} else
			return (
				<>
					<div className="board row">
						<Board figureActive={"x"} />
					</div>
					<div className="players">
						{player1}
						{player2}
					</div>
				</>
			);
	}

	return (
		<div className="container d-flex flex-column align-items-center">
			<h1>tic tac toe</h1>
			{render()}
		</div>
	);
}

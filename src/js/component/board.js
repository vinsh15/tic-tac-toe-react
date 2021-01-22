import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Board = props => {
	let [bufferBoard, setBufferBoard] = useState([
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" "
	]);

	let [figureActive, setFigureActive] = useState("x");

	function changeCell(figure, index) {
		let aux = bufferBoard;
		if (aux[index] == " ") {
			aux[index] = figure;
			setBufferBoard(aux);
			if (figureActive == "x") {
				setFigureActive("o");
			} else if (figureActive == "o") {
				setFigureActive("x");
			}
		} else alert("Ya esta jugada esta celda");
	}

	const verifyWinner = () => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const aux = lines[i];
			if (
				bufferBoard[aux[0]] != " " &&
				bufferBoard[aux[0]] === bufferBoard[aux[1]] &&
				bufferBoard[[aux[0]]] === bufferBoard[aux[2]]
			) {
				if (figureActive == "x") {
					alert("Gano la figura o");
				} else alert("Gano la figura x");
				const aux1 = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
				setBufferBoard(aux1);
			}
			if (
				i == 7 &&
				bufferBoard[0] != " " &&
				bufferBoard[1] != " " &&
				bufferBoard[2] != " " &&
				bufferBoard[3] != " " &&
				bufferBoard[4] != " " &&
				bufferBoard[5] != " " &&
				bufferBoard[6] != " " &&
				bufferBoard[7] != " " &&
				bufferBoard[8] != " "
			) {
				alert("Gano la vieja!!!");
				const aux1 = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
				setBufferBoard(aux1);
			}
		}
	};

	useEffect(() => {
		verifyWinner();
	});

	return bufferBoard.map((figure, index) => {
		return (
			<button
				key={index}
				className={`col-4 cell ${figure}`}
				onClick={e => changeCell(figureActive, index)}
			/>
		);
	});
};

Board.propTypes = {
	figureActive: PropTypes.string
};

export default Board;

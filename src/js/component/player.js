import React, { useState } from "react";
import PropTypes from "prop-types";

const player = props => {
	const [name, setName] = useState(props.name);
	const [figure, setSuit] = useState(props.figure);
	return (
		<div className="players2">
			<div className="text-center">{name}</div>
			<div className={`text-center ${figure}`} />
		</div>
	);
};

player.propTypes = {
	name: PropTypes.string,
	figure: PropTypes.string
};

export default player;

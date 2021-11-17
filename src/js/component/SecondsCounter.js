import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	let digits = props.seconds.toString().padStart(6, 0);

	return (
		<div>
			<div className="rectangle d-flex flex-row">
				<div className="clock">
					<i className="far fa-clock"></i>
				</div>
				{digits.split("").map((item, index) => {
					return (
						<div className="digit" key={index}>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

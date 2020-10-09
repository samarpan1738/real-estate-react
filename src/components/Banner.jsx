import React, { useRef } from "react";
import "../styles/banner.css";
function Banner() {
	const activeButton = useRef(null);

	function setActive(e) {
		activeButton.current.classList.toggle("active");
		e.target.classList.toggle("active");
		activeButton.current = e.target;
	}
	return (
		<div className="banner">
			<h1 className="banner__title">Discover a place you'll love to live</h1>
			<div className="button__container">
				<button
					ref={activeButton}
					className="button active"
					onClick={setActive}
				>
					Buy
				</button>
				<button className="button" onClick={setActive}>
					Rent
				</button>
				<button className="button" onClick={setActive}>
					Sold
				</button>
			</div>

			<div className="banner__input">
				<input type="text" placeholder="New Delhi,India" />
				<div className="search-icon__container">
					<svg
						class="svg"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						className="search-icon"
					>
						<path
							d="M20.756 18.876l6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z"
							fill="#ffffff"
						></path>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Banner;

import React from "react";
import "../styles/global.css";
import "../styles/neighborhood.css";

function Neighborhood() {
	return (
		<div className="neighborhood">
			<h1 className="neighborhood__title section-title">
				Explore neighborhoods on Trulia
			</h1>
			<div className="neighborhood__description text">
				Take a deep dive and browse original neighborhood photos, drone footage,
				resident reviews and local insights to see if the homes or apartments
				for rent are right for you.
			</div>
			<div className="neighborhood__cards__container">
				<div className="neighborhood__card">
					<div className="top-half">
						<div className="card-content">Atlanta, GA</div>
						<h3 className="card-content">Downtown</h3>
					</div>
					<div className="space"></div>
					<div className="card-content bottom-half">View neighborhood ></div>
				</div>
				<div className="small-container">
					<div className="neighborhood__card small">
						<div className="top-half">
							<div className="card-content">Atlanta, GA</div>
							<h3 className="card-content">Downtown</h3>
						</div>
						<div className="space"></div>
						<div className="card-content bottom-half">View neighborhood ></div>
					</div>
					<div className="neighborhood__card small">
						<div className="top-half">
							<div className="card-content">Atlanta, GA</div>
							<h3 className="card-content">Downtown</h3>
						</div>
						<div className="space"></div>
						<div className="card-content bottom-half">View neighborhood ></div>
					</div>
				</div>
				<div className="small-container">
					<div className="neighborhood__card small">
						<div className="top-half">
							<div className="card-content">Atlanta, GA</div>
							<h3 className="card-content">Downtown</h3>
						</div>
						<div className="space"></div>
						<div className="card-content bottom-half">View neighborhood ></div>
					</div>
					<div className="neighborhood__card small">
						<div className="top-half">
							<div className="card-content">Atlanta, GA</div>
							<h3 className="card-content">Downtown</h3>
						</div>
						<div className="space"></div>
						<div className="card-content bottom-half">View neighborhood ></div>
					</div>
				</div>
				<div className="neighborhood__card">
					<div className="top-half">
						<div className="card-content">Atlanta, GA</div>
						<h3 className="card-content">Downtown</h3>
					</div>
					<div className="space"></div>
					<div className="card-content bottom-half">View neighborhood ></div>
				</div>
			</div>
		</div>
	);
}

export default Neighborhood;

import React from "react";
import "../styles/global.css";
import "../styles/find.css";
function Find() {
	return (
		<div className="find-container container">
			<h1 className="section-title">See how Trulia can help</h1>
			<div className="find-box-container">
				<div className="find-box">
					<img
						src="https://www.trulia.com/javascript/moana//_next/static/assets/RentAHomeIcon-7f2dac9d208cc4e2c349ff303271fc4a.svg"
						alt=""
					/>
					<h4 className="find-box__title">Rent a home</h4>
					<div className="find-box__description text">
						With 35+ filters and custom keyword search, Trulia can help you
						easily find a home or apartment for rent that you'll love.
					</div>
					<button className="find-box__button">Find a rental</button>
				</div>
				<div className="find-box">
					<img
						s
						src="https://www.trulia.com/javascript/moana//_next/static/assets/BuyAHomeIcon-9942304aebf90f4412fa0ed4ea6ab1eb.svg"
						alt=""
					/>
					<h4 className="find-box__title">Buy a home</h4>
					<div className="find-box__description text">
						With over 1 million+ homes for sale available on the website, Trulia
						can match you with a house you will want to call home.
					</div>
					<button className="find-box__button">Find a rental</button>
				</div>
				<div className="find-box">
					<img
						src="https://www.trulia.com/javascript/moana//_next/static/assets/NeighborhoodsIcon-a5f51cd13edc84f1fdd582163552abc7.svg"
						alt=""
					/>
					<h4 className="find-box__title">See neighborhoods</h4>
					<div className="find-box__description text">
						With more neighborhood insights than any other real estate website,
						we've captured the color and diversity of communities.
					</div>
					<button className="find-box__button">Find a rental</button>
				</div>
			</div>
		</div>
	);
}

export default Find;

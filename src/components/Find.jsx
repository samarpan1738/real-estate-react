import React from "react";
import "../styles/global.css";
import "../styles/find.css";
import Findbox from "./Findbox"
function Find() {
	return (
		<div className="find-container container">
			<h1 className="section-title">See how Trulia can help</h1>
			<div className="find-box-container">
				<Findbox 
					imgSrc="https://www.trulia.com/javascript/moana//_next/static/assets/BuyAHomeIcon-9942304aebf90f4412fa0ed4ea6ab1eb.svg" 
					title="Buy a home" 
					description="With 35+ filters and custom keyword search, Trulia can help you
                	easily find a home or apartment for rent that you'll love." 
					buttonText="Find a home"
				/>
				<Findbox
					imgSrc="https://www.trulia.com/javascript/moana//_next/static/assets/RentAHomeIcon-7f2dac9d208cc4e2c349ff303271fc4a.svg" 
					title="Rent a home" 
					description="With over 1 million+ homes for sale available on the website, Trulia
					can match you with a house you will want to call home." 
					buttonText="Find a rental"
				/>
				<Findbox
					imgSrc="https://www.trulia.com/javascript/moana//_next/static/assets/NeighborhoodsIcon-a5f51cd13edc84f1fdd582163552abc7.svg" 
					title="See neighborhoods" 
					description="With more neighborhood insights than any other real estate website,
					we've captured the color and diversity of communities." 
					buttonText="Learn More"
				/>
			</div>
		</div>
	);
}

export default Find;

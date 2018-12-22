import React from 'react';
import Card from './Card';
import './Cardlist.css';

const Cardlist = ({robots}) => {

	return (
				<div className= "wrpa_div">
				{
					robots.map( (user,ind) => {
							return (
								<Card 
									key={ind} 
									id={robots[ind].id} 
									name={robots[ind].name} 
									email={robots[ind].email}
								/>
							)
					})


				}
				</div>	
	);

}


export default Cardlist;
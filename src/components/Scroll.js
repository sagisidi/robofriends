import React from 'react';


const Scroll = (props) =>{
	const len = (props.children.props.children.props).robots.length;
		if(len>5){
				return (
					<div style={{overflowY: 'scroll' , border:'1px solid black', height:'500px'}}> 
						{props.children}
					</div>
				)
		}
		else{
			return (
				<div> 
						{props.children}
				</div>	
			)		
		}
		
	

};


export default Scroll;
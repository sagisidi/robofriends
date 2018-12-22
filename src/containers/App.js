import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchb from '../components/Searchb';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state = {
			robots : [],
			Searchfield:''			
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => this.setState({robots:users}));
		
	}
	onSearchChange =(event) =>{
		this.setState({Searchfield:event.target.value});

	}
	render(){
		const {robots,Searchfield} = this.state;

		const filt_robots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(Searchfield.toLowerCase());


		});
		return (robots.length === 0)?
			<h1>Loading Data...</h1> :
			(
				<div className="container-fluid">
					<h1>Robo-Friends</h1>

					<Searchb Searchchange ={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<Cardlist robots={filt_robots} />
						</ErrorBoundry>
					</Scroll>	
				</div>

			);			
		
				

	}

}

export default App;
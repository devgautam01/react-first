import React from "react";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age : this.props.initialAge
		}
	}

	changeAge()
	{
		this.setState({
			age : parseInt(this.state.age) + 1
		})
	}

	render(){
		return(

		<div className="container">
			<div className="row">
				<p>Hello, your age is {this.state.age}</p>
				<button className="btn btn-primary" onClick={()=>this.changeAge()}>Increase your age</button>
			</div>
		</div>

			)
	}
}
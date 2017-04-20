import React from "react";

export class Header extends React.Component {
	render(){
		return(

		<div className="container">
			<div className="row">
				<h2>Welcome {this.props.name} to our Home Page</h2>
			</div>
		</div>

			)
	}
}
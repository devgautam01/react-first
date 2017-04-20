import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class Main extends React.Component {
	render(){
		return(

		<div>
			<Header name="Devesh" />
			<Home initialAge="26" />
		</div>

			)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
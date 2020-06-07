import React from 'react';
import { Notes } from "./components/Notes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<h1>Netmeds Assignment For Shortlisting _ React js</h1>
					<br />
					<Header />
					<br />
					<div className="progress" style={{ height: "1px" }} >
						<div className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
						</div>
					</div>
					<div className="progress">
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
						</div>
					</div>
					<br />
					<div>
					 <Route path="/notes" component={Notes} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

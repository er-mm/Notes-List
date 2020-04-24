import React from "react";
import { Provider } from 'react-redux';
import FetchBooksList from './FetchBooksList';
import AddUpdateBook from './AddUpdateBook';
import { log } from "../utils/myLogger";
import { ErrorBoundary } from './ErrorBoundary';
import MenuBar from './MenuBar';

import store from '../store';

export class LearningRedux extends React.Component {
	// Provider : Makes the Redux store available to the connect() calls in the component hierarchy below.
	render() {
		log('store---');
		log(store);
		return (
			<ErrorBoundary>
				<Provider store={store}>
					<>
						<MenuBar />
						<div className="row">
							<div className="col-sm-6">
								<div className="container">
									<FetchBooksList />
								</div>
							</div>
							<div className="col-sm-6">
								<div className="container">
									<AddUpdateBook />
								</div>
							</div>
						</div>
					</>
				</Provider>
			</ErrorBoundary>
		);
	}
}
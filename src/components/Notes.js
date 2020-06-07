import React from "react";
import { Provider } from 'react-redux';
import FetchNotes from './FetchNotes';
import AddUpdateNotes from './AddUpdateNotes';
import { ErrorBoundary } from './ErrorBoundary';
import MenuBar from './MenuBar';

import store from '../store';

export class Notes extends React.Component {
	render() {
		return (
			<ErrorBoundary>
				<Provider store={store}>
					<>
						<MenuBar />
						<div className="row">
							<div className="col-sm-6">
								<div className="container">
									<FetchNotes />
								</div>
							</div>
							<div className="col-sm-6">
								<div className="container">
									<AddUpdateNotes />
								</div>
							</div>
						</div>
					</>
				</Provider>
			</ErrorBoundary>
		);
	}
}
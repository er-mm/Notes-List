import React from "react";

import { connect } from 'react-redux'; // it connects component to redux store that is provided by the provider component
// we have to call the action alsowhich is fetchTodo
import { fetchBooksList, deleteBook, editBookDetails, containsBook } from '../actions/todoActions';
import { log } from "../utils/myLogger";
import _ from 'lodash';
class FetchBooksList extends React.Component {

	componentDidMount() {
		this.props.fetchBooksList();
	}

	componentWillReceiveProps(nextProps) {
		// when it will receive a new property from state it will run
		log('next props in Fetch post Fetch book list---->');
		log(nextProps);
		if (!_.isEmpty(nextProps.book) && !!nextProps.book.name) {
			this.props.books.unshift(nextProps.book);
		}
	}

	editBook = (e, book) => {
		log('details of edit book-->');
		log(book);
		this.props.editBookDetails(book)
	}
	check = (e, item) => {
		this.props.containsBook(item);
	}

	render() {
		log(this.props);
		const booksList = this.props.books instanceof Array && this.props.books.length
			? [...new Set(this.props.books)].filter((book) => {
				return this.props.searchNote ? book.name.includes(this.props.searchNote) : book;
			}).sort((a,b) => {
				const difference = new Date(b.fullDate).getTime() - new Date(a.fullDate).getTime();
				return difference === 0 ? 0 : difference > 0 ? 1 : -1;
			}).map(item => {
				return (
					<div className="list-group-item list-group-item-action" onClick={(e) => this.check(e, item)}>
						<div key={item.id}>
							<h3>{`${item.name}`}</h3>
							<h5>{`Added on: ${item.addedDate}`}</h5>
						</div>
					</div>
				)
			}) : (
				<div className="form-group shadow p-3 mb-5 bg-white rounded">
					Book are not the instance of Array or Array length seems to be zero
					Please check dbJSON connection.
				</div>
			);
		return (
			<div className="list-group" >
				{booksList}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	books: state.bookStore.books,
	book: state.bookStore.book,
	searchNote: state.bookStore.searchNote
})

export default connect(mapStateToProps, { fetchBooksList, deleteBook, editBookDetails, containsBook })(FetchBooksList);

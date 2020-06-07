import React from "react";
import { connect } from 'react-redux';
import { fetchNotesList, deleteNote, editNoteDetails, containsNote } from '../actions/todoActions';
import { log } from "../utils/myLogger";
import _ from 'lodash';
class FetchNotes extends React.Component {

	componentDidMount() {
		this.props.fetchNotesList();
	}

	editNote = (e, note) => {
		log(note);
		this.props.editNoteDetails(note)
	}
	check = (e, item) => {
		this.props.containsNote(item);
	}

	render() {
		const notesList = this.props.notes instanceof Array
			? this.props.notes.length
				? [...new Set(this.props.notes)].filter((note) => {
					return this.props.searchNote ? note.name.includes(this.props.searchNote) : note;
				}).sort((a, b) => {
					const difference = new Date(b.fullDate).getTime() - new Date(a.fullDate).getTime();
					return difference === 0 ? 0 : difference > 0 ? 1 : -1;
				}).map(item => {
					return (
						<div className="list-group-item list-group-item-action" onClick={(e) => this.check(e, item)}>
							<div key={item.id}>
								<h3>{this.props?.containNote?.id === item.id ? `${this.props.containNote.name}` : `${item.name}`}</h3>
								<h5>{`Added on: ${item.addedDate}`}</h5>
							</div>
						</div>
					)
				})
				: !_.isEmpty(this.props.containNote) && !this.props.containNote.id
					? (<></>)
					: (
						<div className="form-group shadow p-3 mb-5 bg-white rounded">
							No Notes. Please add
						</div>
					)
			: (
				<div className="form-group shadow p-3 mb-5 bg-white rounded">
					Note are not the instance of Array or Array length seems to be zero
					Please check dbJSON connection.
				</div>
			);

		const editNoteList = !_.isEmpty(this.props.containNote) && !this.props.containNote.id
			? (<>
				<div className="list-group-item list-group-item-action">
					<div>
						<h3>{`${this.props.containNote.name}`}</h3>
					</div>
				</div>
			</>)
			: (<></>);
		return (
			<div className="list-group" >
				{editNoteList}
				{notesList}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	notes: state.noteStore.notes,
	note: state.noteStore.note,
	searchNote: state.noteStore.searchNote,
	containNote: state.noteStore.containNote,
})

export default connect(mapStateToProps, { fetchNotesList, deleteNote, editNoteDetails, containsNote })(FetchNotes);

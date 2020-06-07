import React from "react";
import { connect } from 'react-redux';
import { addNote, deleteNote, updateNote, searchNotes, containsNote } from '../actions/todoActions';
import _ from 'lodash';
import { DebounceInput } from 'react-debounce-input';

class MenuBar extends React.Component {

    onSubmitOrUpdate = () => {
        this.props.containNote.id
            ? this.props.updateNote(this.props.containNote, this.props.containNote.id)
            : !_.isEmpty(this.props.containNote)
                ? this.props.addNote(this.props.containNote)
                : alert('Enter note name First');
        this.props.containsNote({})
    }

    deleteNote = () => {
        if(_.isEmpty(this.props.containNote)) {
            alert('Please select a note to delete')
        } else {
            this.props.deleteNote(this.props.containNote.id);
            this.props.containsNote({})
        }
        
    }

    change = (event) => {
        const searchCriteria = event.target.value;
        this.props.searchNotes(searchCriteria);
    }

    render() {
        return (
            <div className="container" align="center">
                <table>
                    <tbody>
                        <tr>
                            <td><button type="submit" className="btn btn-primary" onClick={this.onSubmitOrUpdate}>{this.props.submitUpdateNote}</button></td>
                            <td><button type="submit" className="btn btn-primary" onClick={this.deleteNote}>{`Delete Note`}</button></td>
                            {/* <td><input type="text" className="form-control" id="name" name="name" onChange={this.change} autoFocus placeholder="Search Naote" /></td> */}
                            <td>
                                <DebounceInput
                                    type="text"
                                    className="form-control"
                                    debounceTimeout={300}
                                    onChange={this.change}
                                    placeholder="Search Naote"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h5>Total Notes are {this.props.notes instanceof Array ? this.props.notes.length : 'No NOtes'}</h5>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    submitUpdateNote: state.noteStore.submitUpdateNote,
    containNote: state.noteStore.containNote,
    notes: state.noteStore.notes,
})

export default connect(mapStateToProps, { addNote, updateNote, containsNote, deleteNote, searchNotes })(MenuBar)
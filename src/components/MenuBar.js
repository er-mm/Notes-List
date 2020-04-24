import React from "react";
import { log } from "../utils/myLogger";
import { connect } from 'react-redux';
import { addBook, deleteBook, updateBook, searchNotes, containsBook } from '../actions/todoActions';
import _ from 'lodash';

class MenuBar extends React.Component {

    onSubmitOrUpdate = () => {
        log('on clicking save');
        log(this.props);
        this.props.containBook.id
            ? this.props.updateBook(this.props.containBook, this.props.containBook.id)
            : !_.isEmpty(this.props.containBook)
                ? this.props.addBook(this.props.containBook)
                : alert('Enter book name First');
        this.props.containsBook({})
    }

    deleteBook = () => {
        log('details of deleted book-->');
        log(this.props.containBook);
        this.props.deleteBook(this.props.containBook.id);
        this.props.containsBook({})
    }

    change = (event) => {
        log('in search change- event.target.value is-->');
        log(event.target.value);
        this.props.searchNotes(event.target.value);
    }

    render() {
        log('props in MenuBar');
        log(this.props);
        return (
            <div className="container" align="center">
                <table>
                    <tbody>
                        <tr>
                            <td><button type="submit" className="btn btn-primary" onClick={this.onSubmitOrUpdate}>{this.props.submitUpdateBook}</button></td>
                            <td><button type="submit" className="btn btn-primary" onClick={this.deleteBook}>{`Delete Note`}</button></td>
                            <td><input type="text" className="form-control" id="name" name="name" onChange={this.change} autoFocus placeholder="Search Naote" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    submitUpdateBook: state.bookStore.submitUpdateBook,
    containBook: state.bookStore.containBook
})

export default connect(mapStateToProps, { addBook, updateBook, containsBook, deleteBook, searchNotes })(MenuBar)
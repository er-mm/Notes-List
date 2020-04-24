import React from "react";
import { connect } from 'react-redux';
import { updateBook, containsBook } from '../actions/todoActions';
import { log } from "../utils/myLogger";
import _ from 'lodash';

class AddUpdateBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }


    componentWillReceiveProps(nextProps) {
        // when it will receive a new property from state it will run
        log('next props-> in createpost--->');
        log(nextProps);
        if (!_.isEmpty(nextProps.containBook)) {
            log('next props-> in ifff--->');
            this.setState({
                name: nextProps.containBook.name,
            });
        }
        else {
            this.setState({
                name: '',
            });
        }
    }

    change = (event) => {
        event.preventDefault();
        log('in text change--->');
        log(this.props.containBook)
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateAndtime = `${date} ${time}`;
        const book = this.props.containBook;
        this.props.containsBook({ ...book, name: event.target.value, addedDate: dateAndtime, fullDate: today })
    }

    render() {
        log('props are');
        log(this.props);
        return (
            <div className="container">
                <form className="table p-3 mb-2 bg-light text-dark">
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" value={this.state.name} name="name" onChange={this.change} autoFocus placeholder="Enter Note" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editableBook: state.bookStore.editableBook,
    containBook: state.bookStore.containBook,
    books: state.bookStore.books,
})

export default connect(mapStateToProps, { updateBook, containsBook })(AddUpdateBook);
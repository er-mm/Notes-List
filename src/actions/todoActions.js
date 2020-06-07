import { FETCH_NOTES, CREATE_NOTE, DELETE_NOTE, EDIT_NOTE, UPDATE_NOTE, CONTAIN_NOTE, SEARCH_NOTE } from './types';
import { log } from "../utils/myLogger";

// each action is a function that is to be exported
//ES6
export const fetchNotesList = () => dispatch => {
    log(' Action -> fetching note list-->');
    fetch(' http://localhost:3000/notes')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_NOTES,
            payload: data
        }));
}

export const addNote = noteDetails => dispatch => {
    log('Action -> Adding Note -- noteDetails');
    log(noteDetails);
    fetch(' http://localhost:3000/notes', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(noteDetails)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: CREATE_NOTE,
            payload: data
        }));

}

export const deleteNote = deleteNoteID => dispatch => {
    log('Action -> deleting Note');
    fetch(' http://localhost:3000/notes/' + deleteNoteID, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: DELETE_NOTE,
            payload: deleteNoteID
        }));

}

export const editNoteDetails = note => dispatch => {
    log('Action -> edit Note');
    dispatch({
        type: EDIT_NOTE,
        payload: note
    });

}

export const containsNote = note => dispatch => {
    log('Action -> edit Note');
    dispatch({
        type: CONTAIN_NOTE,
        payload: note
    });

}

export const searchNotes = note => dispatch => {
    log('Action -> Search Note');
    dispatch({
        type: SEARCH_NOTE,
        payload: note
    });

}

export const updateNote = (noteDetails, noteID) => dispatch => {
    log('Action -> updating -- noteDetails');
    log(noteDetails);
    fetch(' http://localhost:3000/notes/' + noteID, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(noteDetails)
    })
        .then(res => res.json())
        .then(noteData => dispatch({
            type: UPDATE_NOTE,
            payload: { noteData, noteID }
        }));
}

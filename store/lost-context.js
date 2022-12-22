import { createContext, useReducer } from 'react';

export const DUMMY_LOST = [
    {
        id: 'l1',
        item: 'wallet',
        location: 'cafe',
        date: '2022-12-10',
        time: '8:00',
        contact: '709-898-5400'
    },
    {
        id: 'l2',
        item: 'book',
        location: 'classroom',
        date: '2022-12-15',
        time: '10:00',
        contact: '606-233-3977'
    }
]

export const LostItemContext = createContext({
    lostItems: [],
    addLost: ({item, location, date, time, contact}) => {},
    deleteLost: (id) => {},
    updateLost: (id, {item, location, date, time, contact}) => {}
}) 

function lostItemReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        // case 'UPDATE':
        //     const updatableLostItemIndex = state.findIndex((lostItem) => lostItem.id === action.payload.id);
        //     const updatableLostItem = state[updatableLostItemIndex];
        //     const updatedLostItem = {...updatableLostItem, ...action.payload.data};
        //     const updated
        default:
            return state;
    }
}


//export default context;
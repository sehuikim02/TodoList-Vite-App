import * as types from '@/actions';

// 상태 변수를 포함하는 state 객체
const initialState = {
    todos: [
        {
            id: 0,
            text: '',
            checked: false,
        }
    ]
}

// Reducer 함수
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REMOVE_TODO:
        case types.TOGGLE_TODO:
        case types.ADD_TODO:
        case types.FETCH_TODOS:
            return Object.assign({}, state, { todos: action.payload });
        default:
            return state;
    }
}
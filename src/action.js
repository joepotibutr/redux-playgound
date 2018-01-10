export const addTodo = text => dispatch => {
    dispatch({ type : 'ADD_TODO', text })
}

const eiei = data => ({
    type : 'SET_VISIBLE_TODOS',
    data
})

export const setVisibleTodos = data => dispatch => {
    dispatch(eiei(data))
}

const moveDownCliked = idx => ({
    type : 'MOVE_DOWN',
    idx
})

export const moveDown = idx => dispatch => {
    dispatch(moveDownCliked(idx))
}
const moveUpCliked = idx => ({
    type : 'MOVE_UP',
    idx
})

export const moveUp = idx => dispatch => {
    dispatch(moveUpCliked(idx))
}


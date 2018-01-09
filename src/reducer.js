

const todo = (state = [] , action) => {
    switch(action.type){
        case  'ADD_TO_DO' :
        return [
            ...state,{
                ...state[action.id],
                text : action.text
            }
        ]
        case 'SET_VISIBLE_TODOS' : 
            return action.data
        case 'MOVE_DOWN' : 
            const idx = action.idx
            if(idx !== state.length-1) 
                return [
                    ...state.slice(0, idx),
                    state[idx+1],
                    state[idx],
                    ...state.slice(idx + 2),
                ]
            else return [
                    state[idx],
                    ...state.slice(0,idx)
                ]    
        default : 
            return state
    }
}



export default todo
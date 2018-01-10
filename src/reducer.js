

const todo = (state = [] , action) => {
    switch(action.type){
        case  'ADD_TO_DO' :
        return [
            ...state,{
                text : action.text
            }
        ]
        case 'SET_VISIBLE_TODOS' : 
            return action.data
        case 'MOVE_DOWN' : 
            const moveDownIdx = action.idx
            if(moveDownIdx !== state.length-1) 
                return [
                    ...state.slice(0, moveDownIdx),
                    state[moveDownIdx+1],
                    state[moveDownIdx],
                    ...state.slice(moveDownIdx + 2),
                ]
            else return [
                    state[moveDownIdx],
                    ...state.slice(0,moveDownIdx)
                ]
        case 'MOVE_UP' : 
            const moveUpIdx = action.idx
            if(moveUpIdx !== 0) 
               return [
                    ...state.slice(0,moveUpIdx - 1),
                    state[moveUpIdx],
                    state[moveUpIdx-1],
                    ...state.slice(moveUpIdx + 1)
                ]
            else return [
                    ...state.slice(moveUpIdx+1),
                    state[moveUpIdx],                    
                ]        
        default : 
            return state
    }
}



export default todo
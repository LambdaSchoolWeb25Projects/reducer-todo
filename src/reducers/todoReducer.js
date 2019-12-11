// reducer and redux are like an event system to create custom events
// modify state here in the reducer
// import into App with {}

// set initial state
export const initialState = {
    items: [
        {
            item: '',
            completed: false,
            id: Math.random()
        }
    ]
};

// create reducer using switch
// each case is an action
export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return { 
                list:[...state.list, action.payload]
                }
        case 'REMOVE_TODO':
            return { list: state.list.filter(item => !item.completed)
            }
        case 'COMPLETE_TODO':
            return { list: state.list.map(item => {
                if(item.id === action.payload){
                    return {...item, completed: !item.completed}
                }else{
                    return item
                }
            }) 
        }
        default:
            return state;
    }
}




// Stretch 

// export const initialState = { count: 0 }
// export const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return { task: state.count +1 };
//         case 'DECREMENT':
//             return { task: state.count -1 };
//         default:
//             return state;
//     }
// }


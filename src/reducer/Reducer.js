export const ADD_TODO="ADD_TODO";
export const REMOVE_TODO=" REMOVE_TODO";
export const TOGGLE_TODO="TOGGLE_TODO";

const initialState={
    todos:[],

};
export const reducer=(state=initialState, action)=>{
    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,action.payload] };

        case  REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((post)=>post.id!==action.payload),//{type:r,id:1};
                 };

        case  TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.filter((post)=>post.id===action.payload
                ),//{type:r,id:1};
            };

        default:
           return state;

    }

}
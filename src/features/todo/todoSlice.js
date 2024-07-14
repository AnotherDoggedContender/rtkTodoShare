import { createSlice } from "@reduxjs/toolkit";
const returnInitState = async () => {
    const response = fetch("/api/todo")
        .then((res) => res.json())
        .then((res) => {
            return {
                todo: res,
            };
        });
};
const initState = returnInitState();
const initialState = {
    todo: [
        // {
        //     id: 1,
        //     title: "example-1",
        //     content: "content-1",
        //     state: false,
        // },
    ],
};

console.log(returnInitState());
export const todoSlice = createSlice({
    name: "todo",
    initState, //이 자리를 initState로 바꾸면 에러 남
    reducers: {
        /**
         *  @payload
         * Array<{
         *  id: String,
         *  content: String,
         *  title: String,
         * }>
         *  * }
         */
        GET_TODOS: (state, action) => {
            state.todo = action.payload;
        },
        ADD_TODO: (state, action) => {
            state.todo.push(action.payload.newTodo);
        },
        DELETE_TODO: (state, action) => {
            state.todo = state.todo.filter((el) => el.id !== action.payload.id);
        },
        UPDATE_TODO: (state, action) => {
            const changedTodo = state.todo.find(
                (el) => el.id === action.payload.id
            );
            changedTodo.content = action.payload.content;
        },
    },
});
export const { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } =
    todoSlice.actions;

export default todoSlice.reducer;

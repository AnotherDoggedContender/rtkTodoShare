import styled from "styled-components";
import OneTodo from "./oneTodo";
import { useTodo } from "../../../store/todo.store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_TODOS } from "../../../features/todo/todoSlice";

const TodoList = () => {
    // const { todos, setTodos } = useTodo();
    const todos = useSelector((store) => {
        return store.todo.todo;
    }); //첫번째 todo는 todo.rtkStore.js의 todo
    //두번째 todo는 todoSlice에 있는 state의 todo
    const dispatch = useDispatch();
    async function fetchTodos() {
        const result = await fetch("/api/todo");
        const data = await result.json();
        dispatch(GET_TODOS(data));
    }
    useEffect(() => {
        fetchTodos();
    }, [dispatch]);
    console.log(dispatch);
    return (
        <S.Wrapper>
            {todos.map((todo) => (
                <OneTodo key={todo.id} todo={todo} />
            ))}
        </S.Wrapper>
    );
};
export default TodoList;

const Wrapper = styled.div`
    padding: 32px 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const S = {
    Wrapper,
};

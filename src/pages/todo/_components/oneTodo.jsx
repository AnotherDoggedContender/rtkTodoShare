import styled from "styled-components";
import { flexAlignCenter } from "../../../libs/styles/common";
import { useRef, useState } from "react";
import { useTodo } from "../../../store/todo.store";
import { useDispatch } from "react-redux";
import { DELETE_TODO, UPDATE_TODO } from "../../../features/todo/todoSlice";

const OneTodo = ({ todo }) => {
    // const { todos, setTodos } = useTodo();
    // deleteTodo, updateTodo는 OneTodo의 함수 --> OneTodo에 다시 위치
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);

    const contentRef = useRef();

    const onPressDeleteTodo = () => {
        const todoId = todo.id;
        dispatch(
            DELETE_TODO({
                id: todoId,
            })
        );
    };

    const onPressChangeEditMode = () => {
        setIsEditMode(true);
    };

    const onPressEdit = () => {
        // 새로 알려드린게 없어요!

        // updateTodo({todoId, content}) 함수로 분리해보세요!
        // updateTodo 지우고 하나의 함수로 합쳐보세요

        // 이걸 못하면 자바스크립트-함수가 부족한거 (복습 열심히 하셔야합니다, 알로리즘 문제 풀이)
        // 리엑트 너무 어려워요 -- 90%이상 자바스크립트가 부족

        // 함수를 분리하고 함수를 내가 정의하는 것을 어려워하는구나 - 더 공부해야한다 (내가 부족한 부분 찾고 두고온거 찾고 공부하기)

        const todoId = todo.id;
        const content = contentRef.current.value;

        dispatch(
            UPDATE_TODO({
                id: todoId,
                content: content,
            })
        );
        setIsEditMode(false);
    };

    return (
        <S.Wrapper state={todo.state}>
            <S.Header>
                <div>
                    {todo.state ? "완료" : "미완료"}
                    {todo.title}
                </div>
                <div>
                    <button
                        onClick={
                            isEditMode ? onPressEdit : onPressChangeEditMode
                        }
                    >
                        {isEditMode ? "완료" : "수정"}
                    </button>
                    <button onClick={onPressDeleteTodo}>삭제</button>
                </div>
            </S.Header>
            {isEditMode ? (
                <textarea
                    ref={contentRef}
                    defaultValue={todo.content}
                ></textarea>
            ) : (
                <S.Content state={todo.state}>{todo.content}</S.Content>
            )}
        </S.Wrapper>
    );
};
export default OneTodo;

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid #999;
    margin: 16px 0;
    border-radius: 8px;
    background-color: ${({ state, theme }) =>
        state ? theme.colors.Gray[1] : theme.colors.white};
`;

const Header = styled.div`
    border-bottom: 1px dotted #999;
    ${flexAlignCenter};
    justify-content: space-between;
    padding: 8px 16px;
    height: 48px;
`;

const Content = styled.div`
    padding: 16px;
    text-decoration: ${({ state }) => (state ? "line-through" : "none")};
`;

const S = {
    Wrapper,
    Header,
    Content,
};

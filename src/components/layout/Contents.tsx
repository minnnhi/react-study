import styled from "styled-components";
import Counter from "../common/Counter";
import Input from "../common/Input";
import Calculator from "../common/Calculator";
import Popup from "../common/Popup";
import LiveClock from "../common/LiveClock";
import TodoList from "../common/ToDoList";

const ContentsContainer = styled.main`
    overflow: auto;
    height: 100%;
    background-color: #ffffff;
    padding: 10px;
`;

type Props = {
    title: string;
};

function Contents({ title }: Props) {
    return (
        <ContentsContainer>
            {/* <h2>{title}</h2> */}
            {/* <Counter />
            <Input />
            <Calculator />
            <LiveClock />
            <Popup content="리액트 스터디" btnTitle="확인" /> */}
            <TodoList />
        </ContentsContainer>
    );
}

export default Contents;

import { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;
const ButtonContainer = styled.div`
    display: grid;
    width: 30%;
    max-width: 400px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`;

const Button = styled.button`
    background-color: #f2f3f5;
    border: none;
    color: black;
    font-size: 1.5rem;
    border-radius: 35px;
    cursor: pointer;
    box-shadow: 3px 3px 3px lightgray;

    &:active {
        margin-left: 2px;
        margin-top: 2px;
        box-shadow: none;
    }
`;

const CalButton = styled(Button)`
    font-size: 2rem;
    color: white;
    background-color: #4b89dc;
`;

const ZeroButton = styled(Button)`
    grid-column: 1/3;
`;

const InputBar = styled.input`
    width: 40%;
    max-width: 450px;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 30px;
    border: 2px solid #4b89dc;
    text-align: right;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
`;

/**
 * @description 계산기 컴포넌트
 */
function Calculator() {
    // state
    const [인풋값, 인풋업데이트] = useState<string>("");

    // event
    const 숫자입력 = (number: number) => {
        인풋업데이트((이전값) => 이전값 + number.toString());
    };

    const 연산자입력 = (operator: string) => {
        인풋업데이트((이전값) => 이전값 + operator.toString());
    };

    const 하나씩지우기 = () => {
        인풋업데이트((이전값) => 이전값.slice(0, -1));
    };

    const 전체지우기 = () => {
        인풋업데이트("");
    };

    // view
    return (
        <MainContainer>
            <InputBar readOnly value={인풋값} />
            <ButtonContainer>
                <Button onClick={전체지우기}>AC</Button>
                <Button onClick={하나씩지우기}>DEL</Button>
                <CalButton onClick={() => 연산자입력("%")}>%</CalButton>
                <CalButton onClick={() => 연산자입력("÷")}>÷</CalButton>
                <Button onClick={() => 숫자입력(7)}>7</Button>
                <Button onClick={() => 숫자입력(8)}>8</Button>
                <Button onClick={() => 숫자입력(9)}>9</Button>
                <CalButton onClick={() => 연산자입력("x")}>x</CalButton>
                <Button onClick={() => 숫자입력(4)}>4</Button>
                <Button onClick={() => 숫자입력(5)}>5</Button>
                <Button onClick={() => 숫자입력(6)}>6</Button>
                <CalButton onClick={() => 연산자입력("-")}>-</CalButton>
                <Button onClick={() => 숫자입력(1)}>1</Button>
                <Button onClick={() => 숫자입력(2)}>2</Button>
                <Button onClick={() => 숫자입력(3)}>3</Button>
                <CalButton onClick={() => 연산자입력("+")}>+</CalButton>
                <ZeroButton onClick={() => 숫자입력(0)}>0</ZeroButton>
                <Button onClick={() => 연산자입력(".")}>.</Button>
                <CalButton onClick={() => 연산자입력("=")}>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    );
}

export default Calculator;

import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const InputArea = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
`;

const TodoItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const TodoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    margin-right: 10px;
    height: 20px;
    width: 20px;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const Task = styled.span<{ completed: boolean }>`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const AddButton = styled(Button)`
    margin-left: 10px;
    background-color: #17a2b8;
    color: #fff;
`;

const EditButton = styled(Button)`
    background-color: #f5dd09;
    color: #fff;
`;

const DeleteButton = styled(Button)`
    background-color: #dc3545;
    color: #fff;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;

    &:focus {
        outline: none;
        border-color: #17a2b8;
    }
`;

type Todo = {
    completed: boolean;
    task: string;
};

const sampleList = [
    { completed: false, task: "React" },
    { completed: false, task: "AWS" },
    { completed: false, task: "DevOps" },
];

/**
 * @description 할 일 목록
 */
function TodoList() {
    // state
    const [list, setList] = useState<Todo[]>(sampleList);
    const [inputValue, setInputValue] = useState<string>("");

    // event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onAdd = () => {
        if (!inputValue) {
            alert("말 입력하셈");

            return;
        }

        setList((prevList) => {
            const addRow = { completed: false, task: inputValue };
            const updateList = prevList.concat(addRow);

            return updateList;
        });

        setInputValue("");
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    const onDelete = (index: number) => {
        // console.log(index);
        setList((prevList) => {
            const updateList = prevList.filter((item, idx) => idx !== index);
            return updateList;
        });
    };

    const onEdit = (index: number) => {
        const updateVlaue = prompt();

        if (!updateVlaue) {
            alert("입력해");
            return;
        }

        setList((prevList) => {
            const updateList = prevList.map((item, idx) => {
                if (idx === index) {
                    const updateRow = { ...item, task: updateVlaue };
                    return updateRow;
                } else {
                    return item;
                }
            });

            return updateList;
        });
    };

    const onCheck = (index: number) => {
        setList((prevList) => {
            const updateList = prevList.map((item, idx) => {
                if (idx === index) {
                    const updateRow = { ...item, completed: !item.completed };
                    return updateRow;
                } else {
                    return item;
                }
            });

            return updateList;
        });
    };

    // view
    return (
        <Wrapper>
            <Title>Todo List</Title>
            <form onSubmit={onSubmit}>
                <InputArea>
                    <Input
                        type="text"
                        placeholder="할 일을 입력해주세요."
                        value={inputValue}
                        onChange={onChange}
                    />
                    <AddButton onClick={onAdd}> Add</AddButton>
                </InputArea>
            </form>
            <TodoItems>
                {list.map((item, index) => (
                    <TodoItem key={index}>
                        <Flex>
                            <Checkbox onClick={() => onCheck(index)} />
                            <Task completed={false}>{item.task}</Task>
                        </Flex>
                        <div>
                            <EditButton onClick={() => onEdit(index)}>
                                Edit
                            </EditButton>
                            <DeleteButton onClick={() => onDelete(index)}>
                                Delete
                            </DeleteButton>
                        </div>
                    </TodoItem>
                ))}
            </TodoItems>
        </Wrapper>
    );
}

export default TodoList;

// import { ChangeEvent, useState } from "react";
// import styled from "styled-components";

// const InputArea = styled.div`
//     display: flex;
// `;

// const Wrapper = styled.div`
//     max-width: 600px;
//     margin: 0 auto;
//     padding: 20px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
// `;

// const Title = styled.h1`
//     font-size: 2.5rem;
//     text-align: center;
//     margin-bottom: 30px;
// `;

// const TodoItems = styled.ul`
//     list-style: none;
//     margin: 0;
//     padding: 0;
// `;

// const TodoItem = styled.li`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-top: 10px;
//     border-bottom: 1px solid #ccc;

//     &:last-child {
//         border-bottom: none;
//     }
// `;

// const Checkbox = styled.input.attrs({ type: "checkbox" })`
//     margin-right: 10px;
//     height: 20px;
//     width: 20px;
// `;

// const Flex = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const Task = styled.span<{ completed: boolean }>`
//     text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
// `;

// const Button = styled.button`
//     padding: 8px 12px;
//     border: none;
//     border-radius: 5px;
//     font-size: 1.2rem;
//     cursor: pointer;
//     transition: all 0.2s;

//     &:hover {
//         opacity: 0.8;
//     }
// `;

// const AddButton = styled(Button)`
//     margin-left: 10px;
//     background-color: #17a2b8;
//     color: #fff;
// `;

// const DeleteButton = styled(Button)`
//     background-color: #dc3545;
//     color: #fff;
// `;

// const Input = styled.input`
//     width: 100%;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     font-size: 1.2rem;

//     &:focus {
//         outline: none;
//         border-color: #17a2b8;
//     }
// `;

// /**
//  * @description 할 일 목록
//  */
// function TodoList() {
//     // state
//     const [list, setList] = useState<string[]>(["a", "b", "c", "d", "e"]);
//     const [inputValue, setInputValue] = useState<string>("");

//     // event
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setInputValue(e.target.value);
//     };

//     const addTask = () => {
//         if (!inputValue) {
//             alert("말입력하셈");
//         }
//     };

//     // view
//     return (
//         <Wrapper>
//             <Title>Todo List</Title>
//             <form>
//                 <InputArea>
//                     <Input type="text" placeholder="할 일을 입력해주세요." />
//                     <AddButton>Add</AddButton>
//                 </InputArea>
//             </form>
//             <TodoItems>
//                 {list.map((item) => (
//                     <TodoItem>
//                         <Flex>
//                             <Checkbox />
//                             <Task completed={false}>{item}</Task>
//                         </Flex>
//                         <div>
//                             <DeleteButton>Delete</DeleteButton>
//                         </div>
//                     </TodoItem>
//                 ))}
//             </TodoItems>
//         </Wrapper>
//     );
// }

// export default TodoList;

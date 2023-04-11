import { ChangeEvent, useEffect, useState } from "react";

function Input() {
    // state
    const [변수명, 업데이트] = useState<string>("");

    // event
    const 인풋입력내용 = (e: ChangeEvent<HTMLInputElement>) => {
        // const value = e.target.value;
        업데이트(e.target.value);
    };

    // watch
    useEffect(() => {
        // init
        console.log(변수명);
    }, [변수명]);

    // view
    return (
        <>
            <h3>Input : {변수명}</h3>
            <input value={변수명} onChange={인풋입력내용} />
        </>
    );
}

export default Input;

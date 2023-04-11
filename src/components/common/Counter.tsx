import { useState } from "react";

function Counter() {
    // state
    const [변수명, 업데이트] = useState<number>(0);

    // event
    const onIncrease = () => {
        // 업데이트(변수명 + 1);
        업데이트((이전값) => 이전값 + 1);
    };

    const onDecrease = () => {
        // 업데이트(변수명 - 1);
        업데이트((이전값) => 이전값 - 1);
    };

    // view
    return (
        <>
            <h3>Counter : {변수명}</h3>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    );
}

export default Counter;

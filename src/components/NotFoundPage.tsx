import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/**
 * @description 잘못된 경로로 들어왔을 때 보여주는 페이지
 */

const Button = styled.button`
    width: 100px;
    height: 40px;
`;

function NotFoundPage() {
    // router-info
    const navigate = useNavigate();

    // event
    const onBack = () => {
        navigate(-1);
    };

    // view
    return (
        <>
            <h2>잘못된 경로로 접근하였습니다.</h2>
            <Button onClick={onBack}>Back</Button>
        </>
    );
}

export default NotFoundPage;

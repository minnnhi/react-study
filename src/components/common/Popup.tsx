import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 15px;
`;

const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PopupContent = styled.div`
    overflow: hidden;
    position: relative;
    background-color: #fff;
    width: 450px;
    padding: 20px 20px 70px 20px;
    border-radius: 8px;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    p {
        padding: 30px 0 40px;
        color: #575757;
        white-space: pre-wrap;
    }
`;
const CloseButton = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #e06348;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
`;

type Props = {
    content: string;
    btnTitle: string;
};

/**
 *@description 팝업 컴포넌트
 */
function Popup({ content, btnTitle }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    // view
    return (
        <Wrap>
            <button onClick={togglePopup}>팝업 열기</button>
            {isOpen && (
                <PopupContainer>
                    <PopupContent>
                        <p>{content}</p>
                        <CloseButton onClick={togglePopup}>
                            {btnTitle}
                        </CloseButton>
                    </PopupContent>
                </PopupContainer>
            )}
        </Wrap>
    );
}

export default Popup;

// import React, { useState } from "react";
// import styled from "styled-components";

// interface PopupProps {
//     title?: string;
//     content: string;
// }

// const PopupContainer = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const PopupContent = styled.div`
//     overflow: hidden;
//     position: relative;
//     background-color: #fff;
//     width: 450px;
//     padding: 20px 20px 70px 20px;
//     border-radius: 8px;
//     font-size: 20px;
//     line-height: 26px;
//     text-align: center;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//     p {
//         padding: 30px 0 40px;
//         color: #575757;
//         white-space: pre-wrap;
//     }
// `;

// const CloseButton = styled.button`
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 70px;
//     background-color: #e06348;
//     border: none;
//     font-size: 20px;
//     color: #fff;
//     cursor: pointer;
// `;

// const Popup: React.FC<PopupProps> = ({ title, content }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div>
//             <button onClick={togglePopup}>팝업 열기</button>
//             {isOpen && (
//                 <PopupContainer>
//                     <PopupContent>
//                         <h2>{title}</h2>
//                         <p>{content}</p>
//                         <CloseButton onClick={togglePopup}>CLOSE</CloseButton>
//                     </PopupContent>
//                 </PopupContainer>
//             )}
//         </div>
//     );
// };

// export default Popup;

import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: #a6f78b;
    padding: 10px;
`;

/**
 * @description Header Component
 * @see https://jsdoc.app/
 */

type Props = {
    title: string;
    description?: string;
};

function Header({ title, description }: Props) {
    //view
    return (
        <HeaderContainer>
            <h2>{title}</h2>
            <p>{description}</p>
        </HeaderContainer>
    );
}

export default Header;

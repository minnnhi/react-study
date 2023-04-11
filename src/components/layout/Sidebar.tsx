import styled from "styled-components";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;
    padding:10px;
`;

type Props = {
    title?: string;
};

function Sidebar({ title }: Props) {
    return (
        <SidebarContainer>
            <h2>{title}</h2>
        </SidebarContainer>
    );
}

export default Sidebar;

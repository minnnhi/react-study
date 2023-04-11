import styled from "styled-components";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Contents from "@/components/layout/Contents";
import Footer from "@/components/layout/Footer";
import GlobalStyle from "@/styles/GlobalStyle";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 240px;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <Header title="Header title" description="ㅎㅇㅎㅇㅎㅇ" />
                <Sidebar title="menu title" />
                <Contents />
                <Footer address="footer address" />
            </AppContainer>
        </>
    );
}

export default App;

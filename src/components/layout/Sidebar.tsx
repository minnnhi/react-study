import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;
    padding: 10px;
    ul {
        margin-top: 100px;
        li {
            font-size: 20px;
            padding: 10px;
            margin: 10px 0;
        }
    }
`;

type Props = {
    title?: string;
};

function Sidebar({ title }: Props) {
    return (
        <SidebarContainer>
            <h2>{title}</h2>
            <ul>
                <li>
                    <NavLink
                        to="calculator"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        calculator
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="live-clock"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        live clock
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="to-do-list"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        to-do list
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="counter"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                    >
                        counter
                    </NavLink>
                </li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;

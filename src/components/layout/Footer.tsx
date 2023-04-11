import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
    padding:10px;
`;

type Props = {
    address?: string;
};

function Footer({ address }: Props) {
    return (
        <FooterContainer>
            <h2>{address}</h2>
        </FooterContainer>
    );
}

export default Footer;

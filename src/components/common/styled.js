import styled from 'styled-components';

export const PageWrap = styled.div`
    width : 100%;
    hegith : 100%;
`;

export const NavbarStyle = styled.div`
    width : 100%;
    font-size : 4vw;
    padding : 2vw;
    background-color : lightblue;
    margin-bottom : 1vw;
    box-sizing: border-box;

    .navFlex p {
        padding : 1vw;
        cursor : pointer;
        box-sizing : border-box;
    }

    .navFlex p:first-child {
        border-right : 0.15vw solid grey;
    }
`;

export const FlexBox = styled.div`
    display : flex;
`;
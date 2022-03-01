import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 10px 0px 10px;
    p {
        display: flex;
        justify-content: center;
        width: 45%;
        height: 100%;
        text-transform: uppercase;
        padding-bottom: 10px;
        cursor: pointer;
        font-weight: 600;
    }
    .active {
        background-color: #5d5dc9;
    }
`;

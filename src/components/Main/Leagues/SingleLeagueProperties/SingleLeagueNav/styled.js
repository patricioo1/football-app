import styled from "styled-components";

export const SingleLeagueNavigation = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: lightgray;
    padding: 10px 10px 0px 10px;
    & p {
        display: flex;
        justify-content: center;
        height: 100%;
        text-transform: uppercase;
        padding-bottom: 10px;
        cursor: pointer;
    }
`;
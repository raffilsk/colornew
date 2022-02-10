import styled from "styled-components";

export const Container = styled.div`
max-width: 720px;
margin: 5rem auto;

table{
    border: 1px solid gray;
    border-collapse: collapse;
    margin: 0 auto;

    th,
    td{
        width: 125px;
        border: 1px solid gray;
        height: 2rem;
        text-align: center;       
    }
    .alignLeft{
        text-align: left;
        padding-left: 10px;
    }
}
`
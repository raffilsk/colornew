import styled from "styled-components";

export const Container = styled.section`
max-width: 720px;
display: flex;
flex-direction: column;
padding-top: 2rem;
align-items: center;
margin: 0 auto;

.alignContent{
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    form {
        row-gap: 0.75rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;     

        input{
            width: 10rem;
            height: 2.5rem;
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 1px solid #ddd;
            }
    }
    .summary{
        display: flex;
        row-gap: 1rem;
        flex-direction: column;

        div{
            width: 9rem;
            height: 4rem;
            position: relative;
            background: #00bb00;

            border-radius: 0.7rem;
            padding-top: 0.5rem;
            text-align: center;
            font-weight: 500;  
            color: white;

            strong{
                    display: block;
                    font-weight: 600;        
                    padding-top: 0.75rem;  
                    color: white;
                }
        }
    }



    *:focus {
        outline: 1px solid #ccc;
    }
}

`
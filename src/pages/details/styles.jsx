import styled from "styled-components"

export const Container = styled.div`

    padding: 4rem 0;

    h1{
        margin: 3rem 0;
    }

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
    }
    button{
        background-color: #6654da;
        color: #fff;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover{
        background-color: #5848c2;
    }

    span{
        line-height: 1.6rem;
        margin-bottom: 1rem;
        font-size: 110%;
    }
    .release-date{
        opacity: 0.5;
    }

`
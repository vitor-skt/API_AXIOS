import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    `

export const Search = styled(SearchAlt)`
  color: #000;
  width: 1.5rem;
  margin-left: 0.6rem;
  cursor: pointer;
  position: fixed;
  margin-top: 0.225rem;
`

export const InputBox = styled.div`
    background-color: #fff;
    width: 300px;
    height: 30px;
    border-radius: 0.7rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 2rem;
    position: fixed;

    input {
        padding-left: 1.5rem;
        margin-left: 0.8rem;
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        border: none;
        font-size: 1.2rem;
        outline: none;
    }
`

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 1rem 0 4rem 0;
    }
`
export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem; 

`
export const MovieListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 12rem;
        border-radius: 1rem;
        margin-bottom: 2rem;
        text-align: center;
    }
    span{
        font-size: 1.2rem;
        font-weight: bold;
    }
    a{
        transition: all 0.3s;
    }
    a:hover{
        transform: scale(1.1);
    }
        
`
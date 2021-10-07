import styled from "styled-components";


export const Input = styled.input`
    border: 1px solid #999;
    padding: 0.5rem;
    width: 350px;
    font-size: 1em;
`

export const Suggestion = styled.ul`
    font-family: sans-serif;
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    margin-top: 0;
    max-height: 140px;
    overflow-y: auto;
    padding-left: 0;
    width: calc(350px + 1rem);
    font-size: 1em;
    li {
        padding: 0.5rem;
    }
    .suggestion-active, li:hover {
        background-color: #89A1EF;
        color: #ffffff;
        cursor: pointer;
        font-weight: 700;
    }
    li:not(:last-of-type) {
        border-bottom: 1px solid #999;
    }
`

export const NoSuggestions = styled.div`
    color: #999;
    padding: 0.5rem;
`
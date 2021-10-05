import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #212121;
    justify-content: center;
    align-items: center;
    header {
        background: linear-gradient(to right, #302E24, #28313E);
        height: 60px;
        width: 100%;
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .1);
        /* margin-bottom: 70px; */
    }
    p, h1 {
        margin: 30px auto;
        width: 800px;
        color: #ffffff;
    }

@media screen and (max-width: 769px) {
    width: 100%;

    p, h1 {
        margin: 0 auto;
        width: 100%;
        color: #ffffff;
        padding: 0px 16px;
        margin: 16px 0;
    }
}
`

export const Progress = styled.div`
    position: fixed;
    top: 0;
    background: linear-gradient(
        to right,
        rgba(250, 224, 66, .8) ${props => props.scroll},
        transparent 0);
    width: 100%;
    height: 4px;
    z-index: 3;
`
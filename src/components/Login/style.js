import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: calc(50px + 5%) auto 0 auto;
    
    
    form {
        width: 303px;
        display: flex;
        flex-direction: column;
        margin-top: 32px;
    }

    p {
        font-size: 14px;
        line-height: 17px;
        color: #52B6FF;
        text-decoration: underline;
        text-align: center;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 45px;
    margin-bottom: 7px;
    border-radius: 4px;
    border: 1px solid #d5d5d5;
    padding-left: 11px;
    font-size: 19px;
    color: black;

    ::placeholder {
        color: #dbdbdb;
    }
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    background-color: #52B6FF;
    border-radius: 4px;
    border: none;
    transition: 0.2s;

    &:active {
        font-size: 25px;
        background-color: #38aafd;
    }
`;

const Title = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 69px;
    color: #126BA5;
    line-height: 86px;
`;

const Image = styled.img`
    width: 180px;
    height: auto;
`;

export {
    Input,
    Button,
    Title,
    Image,
    Container,
}
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    div {
        padding: 20px;
        margin-bottom: 20px;
        background: #ccc;
        width: 700px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #111;
        border-radius: 15px;
        font-size: 20px;

        button {
            padding: 10px;
            border-radius: 50px;
            font-size: 20px;
            background: red;
            color: #fff;
            font-weight: bold;
            border: none;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 180px;
    padding: 50px;
`;

export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
    }
`;

export const Button = styled.button`
    padding: 5px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    background: #666;
    color: #fff;
    font-weight: bold;
    margin-bottom: 60px;

    &:hover {
        background: #888;
    }
`;

export const Input = styled.input`
    margin-bottom: 10px;
    border: none;
    font-size: 20px;
    border-radius: 7px;
    color: #222;
    padding: 5px;
`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    form {
        display: flex;
        flex-direction: column;
        padding: 60px;
        background: #333;
        border-radius: 20px;
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

    &:hover {
        background: #888;
    }
`;

export const Input = styled.input`
    margin-bottom: 20px;
    border: none;
    font-size: 20px;
    border-radius: 7px;
    color: #222;
    padding: 5px;
`;
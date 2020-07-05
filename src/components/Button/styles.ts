import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  button{
    background: #FF9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    font-weight: 500;
    width: 100%;
    margin-top: 16px;
    transition: background-color .2s;

    &:hover{
      background: ${shade(.2, '#FF9000')};
    }
  }
`;

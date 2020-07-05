import styled from 'styled-components';

export const Container = styled.div`

  position: relative;

  span{
    background: #FF9000;
    padding: 6px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    width: 160px;
    opacity: 0;
    transition: opacity 0.4;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312E28;

    &::before{
      border-style: solid;
      border-color: #FF9000 transparent;
      border-width: 6px 6px 0 6px;
      content: '';
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span{
    opacity: 1;
    visibility: visible;
  }

`;

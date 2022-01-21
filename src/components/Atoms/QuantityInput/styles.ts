import styled, { css } from 'styled-components';

interface IButton {
  direction: 'right' | 'left';
}

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 20px 20px 20px;
  padding: 10px;

  align-items: center;
  justify-content: center;
`;

export const Input = styled.span`
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const Button = styled.button<IButton>`
  outline: none;
  border: none;
  background-color: transparent;
  align-items: center;

  ${(props) =>
    props.direction === 'left' &&
    css`
      img {
        transform: rotateY(180deg);
      }
    `}

  width: 20px;
  height: 20px;

  img {
    width: 20px;
  }
`;

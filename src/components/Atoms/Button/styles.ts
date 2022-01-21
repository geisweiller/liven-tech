import styled from 'styled-components';
import { theme } from '../../../constants/theme';

interface IButtonStyles
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  backgroundColor:
    | 'turquoise'
    | 'yellow'
    | 'red'
    | 'green'
    | 'orange'
    | 'clear'
    | 'grey'
    | 'lightGrey'
    | 'white'
    | 'black'
    | 'transparent';
  fontColor:
    | 'turquoise'
    | 'yellow'
    | 'red'
    | 'green'
    | 'orange'
    | 'clear'
    | 'grey'
    | 'lightGrey'
    | 'white'
    | 'black';
}

export const CustomButton = styled.button<IButtonStyles>`
  background-color: ${(props) => theme.colors[props.backgroundColor]};
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;
  color: ${(props) => theme.colors[props.fontColor]};

  :hover {
    opacity: 0.6;
  }
`;

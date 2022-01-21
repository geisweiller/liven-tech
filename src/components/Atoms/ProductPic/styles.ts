import styled, { keyframes } from 'styled-components';
import { theme } from '../../../constants/theme';

interface IPicturePicStyles {
  width?: number;
  height?: number;
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ProductImage = styled.img<IPicturePicStyles>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};

  align-self: center;

  border-radius: 4px;
`;

export const CustomSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-right: 3px solid ${theme.colors.black};
  border-bottom: 3px solid ${theme.colors.black};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

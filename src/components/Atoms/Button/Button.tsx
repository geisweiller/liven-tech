import React from 'react';
import { IButton } from './interfaces';

import * as S from './styles';

const Button: React.FC<IButton> = ({ children, backgroundColor, fontColor, ...props }) => {
  return (
    <S.CustomButton
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      onClick={props.onClick}
      data-testid="button"
    >
      {children}
    </S.CustomButton>
  );
};

export default Button;

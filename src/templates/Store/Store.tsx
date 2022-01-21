import React from 'react';

import * as Molecules from '../../components/Molecules';
import * as S from './styles';

const Store: React.FC = ({ children }) => {
  return (
    <S.TemplateWrapper>
      <Molecules.Header />
      <S.ChildrenContainer>{children}</S.ChildrenContainer>
    </S.TemplateWrapper>
  );
};

export default Store;

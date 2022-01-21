import React from 'react';
import { IDropdown } from './interfaces';

import * as S from './styles';

const Dropdown: React.FC<IDropdown> = ({ opts, onChange, placeholder }) => {
  return (
    <S.Select
      onChange={(e) => onChange(e.currentTarget.value)}
      placeholder={placeholder}
      data-testid="dropdown"
    >
      {opts.map(({ label, value }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </S.Select>
  );
};

export default Dropdown;

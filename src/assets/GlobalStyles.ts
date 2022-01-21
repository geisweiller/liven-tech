import { createGlobalStyle } from 'styled-components';
import { theme } from '../constants/theme';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${theme.fonts.primary}; 

  button:hover {
    cursor: pointer;
  }
};

html, body, #root {
  height: 100vh;
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.clear};
}
`;

import styled, { css } from 'styled-components';

interface INavigationButton {
  direction: 'right' | 'left';
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0 0;
  max-height: 100vh;
  max-width: 100vw;
  min-height: 100vh;
  min-width: 100vw;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  max-width: 220px;
  padding-bottom: 10px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  overflow-x: scroll;
  gap: 40px;
  row-gap: 20px;
  max-height: 100vh;
  max-width: 100vw;
  padding: 20px 60px;

  position: relative;

  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const navigationButtonModifier = {
  right: css`
    img {
      transform: rotate(180deg);
    }
    left: auto;
    right: 10px;
  `,
};

export const NavigationButton = styled.button<INavigationButton>`
  position: fixed;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 10px;
  opacity: 0.5;

  ${({ direction }) => css`
    ${direction === 'right' && navigationButtonModifier.right} }
  `}}

  border-radius: 50%;
  outline: none;
  border: none;

  :hover {
    opacity: 1;
  }

  img {
    width: 60px;
    height: 60px;
  }

  :disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

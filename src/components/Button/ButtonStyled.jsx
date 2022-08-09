import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin: auto;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  transition: transform 250ms ease-in-out;
  background-color: rgb(101, 227, 255);
  color: ${p => p.theme.colors.text};
  :hover,
  :focus {
    color: ${p => p.theme.colors.textHover};
    transform: scale(1.08);
  }
`;

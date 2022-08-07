import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  height: 30px;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 250ms linear, transform 250ms ease-in-out;
  background-color: rgb(101, 227, 255);
  box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
  :hover,
  :focus {
    background-color: rgb(0, 149, 255);
    color: ${p => p.theme.colors.textHover};
    transform: scale(1.08);
  }
`;

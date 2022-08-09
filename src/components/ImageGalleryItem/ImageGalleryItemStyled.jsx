import styled from '@emotion/styled';

export const Image = styled.img`
  width: 100%;
  height: 260px;
  transition: transform 250ms ease-in-out;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 5px 10px 2px rgba(45, 90, 124, 0.2);
  :hover,
  :focus {
    transform: scale(1.04);
    cursor: zoom-in;
  }
`;

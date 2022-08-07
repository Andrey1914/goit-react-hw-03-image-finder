import styled from '@emotion/styled';

export const Element = styled.li`
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 5px 10px 2px rgba(45, 90, 124, 0.2);
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.08);
    cursor: zoom-in;
  }
`;

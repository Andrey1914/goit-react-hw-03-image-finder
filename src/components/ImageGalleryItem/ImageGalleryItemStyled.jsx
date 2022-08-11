import styled from '@emotion/styled';

export const Image = styled.img`
  width: 100%;
  height: 260px;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;
  border-radius: ${p => p.theme.radii.normal};

  :hover,
  :focus {
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14), 0px 5px 3px 2px rgba(0, 0, 0, 0.12);
    transform: scale(1.04);
    cursor: zoom-in;
  }
`;

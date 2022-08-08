import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: ${p => p.theme.space[4]}px;
  max-width: calc(100vw - 48px);
  margin-bottom: ${p => p.theme.space[4]}px;
  margin: auto;
`;

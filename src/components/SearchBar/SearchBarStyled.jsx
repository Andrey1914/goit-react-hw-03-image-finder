import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.none};
`;

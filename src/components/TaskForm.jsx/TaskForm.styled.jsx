import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: 4px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  font: inherit;

  &:focus {
    outline-color: #6363e9;
  }
`;

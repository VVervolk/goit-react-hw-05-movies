import styled from '@emotion/styled';

export const Form = styled.form`
  display: inline-flex;
  justify-content: center;
  gap: 12px;
  background-color: var(--white-color);
  padding: 16px 20px;
  border-radius: 12px;
  color: var(--main-bg-color);
  margin-bottom: 12px;

  & Button {
    margin-bottom: 0;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  background-color: var(--turquoise-color);
  border-radius: 12px;
  border-width: 0;
  margin: 16px auto 0;
  padding: 8px 12px;
  cursor: pointer;
`;

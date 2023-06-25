import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: var(--turquoise-color);
  border-radius: 12px;
  border-width: 0;
  margin-bottom: 12px;
`;

export const DetailsBox = styled.div`
  background-color: var(--white-color);
  padding: 16px 20px;
  border-radius: 12px;
  color: var(--main-bg-color);
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const ImageBox = styled.div`
  max-width: 200px;
`;

export const SubTitle = styled.h3`
  margin-top: 16px;
`;

export const AdditionalBox = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AdditionalList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const AdditionalLink = styled.li`
  background-color: var(--turquoise-color);
  padding: 4px 8px;
  border-radius: 12px;

  &:hover,
  &:focus {
    color: var(--white-color);
  }
`;

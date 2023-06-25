import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: stretch;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - (7 * 20px)) / 8);
  min-height: 190px;
`;

export const CastImage = styled.img`
  min-height: 190px;
`;

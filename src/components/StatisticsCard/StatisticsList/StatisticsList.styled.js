import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  box-sizing: border-box;
  width: calc(100% / 3);
  text-align: center;
  border-left: 1px solid #ebebeb;
`;

export const ListLabel = styled.span`
  display: block;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 1px;
  color: #95989a;
`;

export const ListPercentage = styled.span`
  display: block;
  font-weight: 700;
  font-size: 20px;
  margin-top: 5px;
`;

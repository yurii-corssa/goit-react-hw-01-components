import { styled } from 'styled-components';

export const BodyRow = styled.tr`
  display: flex;
  &:nth-child(even) {
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    td {
      border-left: 1px solid #fbfbfb;
    }
  }
`;

export const BodyCell = styled.td`
  width: calc(100% / 3);
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 1px;

  padding: 5px 0;
  border-left: 1px solid #ebebeb;
`;

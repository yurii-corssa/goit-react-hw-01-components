import { styled } from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 715px;
  padding: 0;
  margin: 30px auto;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  color: #333;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

export const Head = styled.thead``;

export const HeadRow = styled.tr`
  display: flex;
  background-image: radial-gradient(
    circle 1003px at 87.3% 129.3%,
    rgba(240, 70, 119, 1) 21.4%,
    rgba(255, 160, 128, 1) 50.4%,
    rgba(255, 255, 255, 1) 100.2%
  );
`;

export const HeadCell = styled.th`
  width: calc(100% / 3);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;
  padding: 5px 0;
  border-left: 1px solid #ebebeb;
`;

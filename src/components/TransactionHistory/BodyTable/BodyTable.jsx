import { BodyCell, BodyRow } from './BodyTable.styled';

export const BodyTable = ({ data }) => {
  return (
    <tbody>
      {data.map(({ id, type, amount, currency }) => {
        return (
          <BodyRow key={id}>
            <BodyCell>{type}</BodyCell>
            <BodyCell>{amount}</BodyCell>
            <BodyCell>{currency}</BodyCell>
          </BodyRow>
        );
      })}
    </tbody>
  );
};

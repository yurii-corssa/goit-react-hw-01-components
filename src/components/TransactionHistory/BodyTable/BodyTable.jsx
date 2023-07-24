import PropTypes from 'prop-types';

import { BodyCell, BodyRow } from './BodyTable.styled';

export const BodyTable = ({ data }) => {
  return data.map(transaction => {
    const { id, type, amount, currency } = transaction;
    return (
      <BodyRow key={id}>
        <BodyCell>{type}</BodyCell>
        <BodyCell>{amount}</BodyCell>
        <BodyCell>{currency}</BodyCell>
      </BodyRow>
    );
  });
};

BodyTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

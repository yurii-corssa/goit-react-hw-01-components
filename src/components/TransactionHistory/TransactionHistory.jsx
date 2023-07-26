import { BodyTable } from './BodyTable/BodyTable';
import PropTypes from 'prop-types';
import { Head, HeadCell, HeadRow, Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ data }) => {
  return (
    <Table>
      <Head>
        <HeadRow>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </HeadRow>
      </Head>
      <BodyTable data={data} />
    </Table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired)
    .isRequired,
};

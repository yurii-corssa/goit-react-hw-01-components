import { BodyTable } from './BodyTable/BodyTable';
import { Head, HeadCell, HeadRow, Table } from './TransactionHistory.styled';
import dataTransactions from './transactions.json';

export const TransactionHistory = () => {
  return (
    <Table>
      <Head>
        <HeadRow>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </HeadRow>
      </Head>
      <tbody>
        <BodyTable data={dataTransactions} />
      </tbody>
    </Table>
  );
};

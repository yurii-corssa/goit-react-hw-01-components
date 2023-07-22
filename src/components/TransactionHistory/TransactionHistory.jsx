import { BodyTable } from './BodyTable/BodyTable';
import dataTransactions from './transactions.json';

export const TransactionHistory = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <BodyTable data={dataTransactions} />
      </tbody>
    </table>
  );
};

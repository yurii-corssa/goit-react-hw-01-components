export const BodyTable = ({ data }) => {
  return data.map(transaction => {
    const { id, type, amount, currency } = transaction;
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
};

export const StatisticsList = ({ data }) => {
  return data.map(elem => {
    const { id, label, percentage } = elem;
    return (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    );
  });
};

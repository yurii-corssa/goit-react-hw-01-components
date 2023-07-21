export const List = ({ lable, percentage }) => {
  return (
    <li className="item">
      <span className="label">{lable}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

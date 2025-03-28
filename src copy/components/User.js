import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name } = props;
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Canada</h3>
      <h4>Contact: @muqaddas_2000</h4>
    </div>
  );
};
export default User;

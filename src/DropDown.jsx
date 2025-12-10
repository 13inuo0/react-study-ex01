import { useState } from "react";

const DropDown = () => {
  const [color, setColor] = useState("red");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="content">
      <h1>좋아하는 색 선택</h1>
      <select onChange={handleChange} value={color}>
        <option value="red">빨강</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="yellow">노랑</option>
      </select>
      <p>
        당신이 선택한 색은 <strong style={{backgroundColor: color, color:"white"}}>{color}</strong>입니다.
      </p>
    </div>
  );
};
export default DropDown;

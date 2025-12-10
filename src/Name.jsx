import { useState } from "react";

function Name() {
  const [inputname, setInputName] = useState("");
  const [saveName, setSaveName] = useState("");
  function handleChange(e) {
    setInputName(e.target.value); //입력값 저장
  }
  function handleSave() {
    setSaveName(inputname);
  }
  return (
    <div>
      <h1>이름 저장하기</h1>
      <input
        style={{ padding: "10px" }}
        type="text"
        placeholder="이름 입력"
        onChange={handleChange}
        value={inputname}
      />
      <button style={{ padding: "10px" }} onClick={handleSave}>
        저장
      </button>
      <p>{saveName && `안녕하세요, ${saveName}님!`}</p>
    </div>
  );
}
export default Name;

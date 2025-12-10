import { useState } from "react";

function App() {
  const [emoji, setEmoji] = useState("😊");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // 상태 변경
  function changeEmoji() {
    setEmoji("😢");
  }
  // 상태 토글변경
  function toggleEmoji() {
    setEmoji(emoji === "😊" ? "😍" : "😊");
  }
  // 숫자 ++
  function increase() {
    setCount(count + 1);
  }
  // 숫자 --
  function decrease() {
    setCount(count - 1);
  }
  // 이름입력
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>안녕하세요</h1>
      <p>지금 기분: {emoji}</p>
      <button onClick={changeEmoji}>기분 변경</button>
      <button onClick={toggleEmoji}>기분변경(토글)</button>
      <hr />
      <p>지금 숫자:{count}</p>
      <button onClick={increase}>숫자 올리기 +</button>
      <button onClick={decrease}>숫자 내리기 -</button>
      <hr />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>너의 이름은?</h1>
        <input type="text" placeholder="이름을 입력해주세요." onChange={handleChange} value={name} />
        <p>
          안녕하세요, <strong>{name || "..."}님!!</strong>
        </p>
      </div>
    </div>
  );
}

export default App;

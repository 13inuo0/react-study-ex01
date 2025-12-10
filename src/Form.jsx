import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

//   console.log(name);
//   console.log(email);

function handleSubmit(e) {
    e.preventDefault();
    setResult(`이름:${name}, 이메일${email}`)
    setName("")
    setEmail("")
}

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>폼전송</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">제출</button>
      </form>
      <p>{result}</p>
    </div>
  );
}
export default Form;

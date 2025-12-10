import { useState } from "react";

function Check() {
  const [agree, setAgree] = useState(false);  //check여부 저장
  console.log(agree);
  
  function handleCheckBox(e) {
    setAgree(e.target.checked)
  }
  return (
    <div>
      <h1>회원가입</h1>
      <label>
        <input type="checkbox" checked={agree} onChange={handleCheckBox} />
        약관에 동의합니다.
      </label>
      <p>{agree ? "동의완료" : "동의하지 않았습니다."}</p>
    </div>
  );
}
export default Check;

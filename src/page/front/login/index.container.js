import LoginPresenter from "./index.presenter";
import { useRef, useState } from "react";

export default function LoginContainer() {
  const inputEl = useRef();
  const [buttonState, setButtonState] = useState(true);

  const onClickButton = () => {
    setButtonState(!buttonState);
    console.log(buttonState);
  };

  const [loginID, setLoginID] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onChangeID = (event) => {
    setLoginID(event.target.value);
  };

  const onChangePassword = (event) => {
    setLoginPassword(event.target.value);
  };

  const onClickLogin = () => {
    // alert("아이디 :" + loginID);
    // alert("비밀번호 :" + loginPassword);

    if (loginID.length == 0) {
      alert("아이디를 입력해주세요");
    } else if (loginPassword == 0) {
      alert("비밀번호를 입력해주세요");
    }
    if (loginID.length > 0 && loginPassword.length > 0) {
      alert(
        "1 : 조건에 맞으니 서버로 데이터 보내기 / 2 : try랑 catch 이용하기 / try내부에는 데이터 일치할때 로그인 이후 화면 보여주는 로직 짜고, catch내부에는 데이터 불일치할때 띄워줄 팝업창 로직 짜면됨 "
      );
    }
  };

  return (
    <LoginPresenter
      inputEl={inputEl}
      buttonState={buttonState}
      onClickButton={onClickButton}
      onClickLogin={onClickLogin}
      loginID={loginID}
      loginPassword={loginPassword}
      onChangeID={onChangeID}
      onChangePassword={onChangePassword}
    />
  );
}

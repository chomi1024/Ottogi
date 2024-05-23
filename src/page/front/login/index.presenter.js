import Breadcrumb from "./../../../Componant/Main/breadcrumb/index";
import * as L from "./index.style";
import Link from "next/link";

export default function LoginPresenter(props) {
  return (
    <L.Inner>
      <Breadcrumb nav1={"로그인"} src1={"guest_login"} />

      <L.loginWrapper>
        <h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Logo.svg?alt=media&token=a9fa2351-6496-4cfd-a1f7-68fb5754f317"
            alt=""
          />
          엔 다 있다!
        </h2>

        <form>
          <L.login_box>
            <div>
              <input
                type="text"
                placeholder="아이디"
                ref={props.inputEl}
                value={props.loginID}
                onChange={props.onChangeID}
              />
            </div>

            <div>
              <input
                type={props.buttonState ? "text" : "password"}
                placeholder="비밀번호"
                ref={props.inputEl}
                value={props.loginPassword}
                onChange={props.onChangePassword}
              />
              <L.showButton
                type="button"
                buttonState={props.buttonState}
                onClick={props.onClickButton}
              />
            </div>
          </L.login_box>

          <ul>
            <li>
              <Link href="">
                <a>아이디 찾기</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>비밀번호 찾기</a>
              </Link>
            </li>
          </ul>

          <L.buttonWrapper>
            <Link href="">
              <a onClick={props.onClickLogin}>로그인</a>
            </Link>
            <Link href="">
              <a>회원가입</a>
            </Link>
          </L.buttonWrapper>
        </form>

        <L.snsWrapper>
          <strong>SNS 계정으로 로그인</strong>

          <div>
            <Link href="">
              <a>
                <span />
              </a>
            </Link>
            <Link href="">
              <a>
                <span />
              </a>
            </Link>
            <Link href="">
              <a>
                <span />
              </a>
            </Link>
          </div>
          <br />
          <p>
            <span>!</span>임직원 간편로그인은 <a href="">여기</a>를 확인해주세요
          </p>
        </L.snsWrapper>
      </L.loginWrapper>
    </L.Inner>
  );
}

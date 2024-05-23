import { Inner } from "../../../../../styles/main";
import * as G from "./index.style";
import MypageSide from "./../../../../Componant/Page/mypage/sidemenu";
import Link from "next/link";

export default function GuestLoginlogoutUI() {
  return (
    <>
      <Inner width="1410px" padding={"50px 0 0 0"} display={"flex"}>
        <MypageSide logout={true} padding={"0 60px 0 0"} />

        <G.contents>
          <span />

          <div>
            <Link href="">
              <a>끝없는 혜택보기</a>
            </Link>

            <Link href="/front/auth/login">
              <a>로그인/회원가입 하기</a>
            </Link>
          </div>
        </G.contents>
      </Inner>
    </>
  );
}

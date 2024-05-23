import Link from "next/link";
import * as M from "./index.style";

export default function MypageSide(props) {
  return (
    <M.Inner padding={props.padding}>
      <h2>마이페이지</h2>

      <ul>
        <li>
          <strong>쇼핑정보</strong>
        </li>
        <li>
          <Link href="">
            <a>주문배송조회</a>
          </Link>
        </li>
        {props.login && (
          <li>
            <Link href="">
              <a>취소/교환/반품 조회</a>
            </Link>
          </li>
        )}
      </ul>

      {props.login && (
        <ul>
          <li>
            <strong>쇼핑활동</strong>
          </li>
          <li>
            <Link href="">
              <a>상품후기</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>찜리스트</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>자주 구매 상품</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>재입고 알림 신청</a>
            </Link>
          </li>
        </ul>
      )}

      {props.login && (
        <ul>
          <li>
            <strong>회원정보</strong>
          </li>
          <li>
            <Link href="">
              <a>회원정보 변경</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>배송지 관리</a>
            </Link>
          </li>
        </ul>
      )}

      <ul>
        <li>
          <strong>문의</strong>
        </li>

        {props.login && (
          <li>
            <Link href="">
              <a>상품문의</a>
            </Link>
          </li>
        )}

        {props.login && (
          <li>
            <Link href="">
              <a>1:1문의</a>
            </Link>
          </li>
        )}

        <li>
          <Link href="">
            <a>대량주문문의</a>
          </Link>
        </li>

        {props.login && (
          <li>
            <Link href="">
              <a>뚜밀리숲 확인</a>
            </Link>
          </li>
        )}
      </ul>

      <ul>
        <li>
          <strong>공지</strong>
        </li>
        <li>
          <Link href="">
            <a>공지사항</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>자주 묻는 질문</a>
          </Link>
        </li>
        {props.logout && (
          <li>
            <Link href="">
              <a>오뚜기몰 소개</a>
            </Link>
          </li>
        )}
        {props.logout && (
          <li>
            <Link href="">
              <a>고객센터</a>
            </Link>
          </li>
        )}
      </ul>
    </M.Inner>
  );
}

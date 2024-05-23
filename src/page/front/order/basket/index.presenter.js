import { Inner } from "../../../../../styles/main";
import * as B from "./index.style";
import Breadcrumb from "./../../../../Componant/Main/breadcrumb/index";

export default function BasketUI(props) {
  return (
    <>
      <Inner width="1410px">
        <Breadcrumb nav1={"장바구니"} src1={"/order/basket"} />

        <B.BasketWrapper>
          <B.Title>장바구니</B.Title>
          <B.ContentsWrapper>
            <B.leftWrapper>
              <B.TapmenuWrapper>
                <B.tap active={true}>일반배송{}</B.tap>
                <B.tap>선물하기🎁{}</B.tap>
                <B.tap>마일리지{}</B.tap>
              </B.TapmenuWrapper>
            </B.leftWrapper>

            <B.rightWrapper>
              <h3>상품금액</h3>
              <ul>
                <li>
                  총 상품금액 <span>0원</span>
                </li>
                <li>
                  총 할인금액<span>0원</span>
                </li>
                <li></li>
              </ul>
            </B.rightWrapper>
          </B.ContentsWrapper>
        </B.BasketWrapper>
      </Inner>
    </>
  );
}

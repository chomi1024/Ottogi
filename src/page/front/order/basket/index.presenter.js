import { Inner } from "../../../../../styles/main";
import CartFalse from "../../../../Componant/Main/Cart/false";
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

              <B.BoxWrapper>
                <B.OptionWrapper>
                  <div>
                    <B.CheckBox
                      checked={props.checked}
                      onChange={props.onClickChecked}
                    >
                      <input type="checkbox" checked={props.checked} />
                    </B.CheckBox>
                    <strong>전체선택</strong>
                  </div>

                  <ul>
                    <li>품절삭제</li>
                    <li>선택삭제</li>
                  </ul>
                </B.OptionWrapper>
              </B.BoxWrapper>

              {props.cart || <CartFalse />}
              {/* {props.cart && <CartTrue/>} */}
            </B.leftWrapper>

            <B.rightWrapper>
              <B.TopWrapper>
                <h3>상품금액</h3>
                <ul>
                  <li>
                    총 상품금액 <span>0원</span>
                  </li>
                  <li>
                    총 할인금액<span>0원</span>
                  </li>
                  <li>
                    총 배송비<span>0원</span>
                  </li>
                </ul>

                <div>
                  <div>
                    <strong>결제 예상금액 </strong>
                    <h3>{}원</h3>
                  </div>
                  <ul>
                    <li>
                      · 무료배송 혜택 상품 및 배송 유형별 30,000원 이상 구매 시
                      무료배송입니다.
                    </li>
                    <li>
                      · 배송 유형 간 교차 합계 금액은 무료배송에 적용되지
                      않습니다. (상온 배송+저온 배송 합계 30,000원 무료배송불가)
                    </li>
                  </ul>
                </div>
              </B.TopWrapper>

              <B.Button>{}원 주문하기</B.Button>
            </B.rightWrapper>
          </B.ContentsWrapper>
        </B.BasketWrapper>
      </Inner>
    </>
  );
}

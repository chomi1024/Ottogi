import Link from "next/link";
import * as H from "./index.style";

export default function LayoutFooterUI() {
  return (
    <>
      <H.Top>
        <H.Inner top={true}>
          <h1>
            <Link href="/main">
              <a>
                <span />
              </a>
            </Link>
          </h1>

          <H.Search>
            <input type="text" placeholder="라면은 역시 오뚜기 라면~🍜" />
          </H.Search>
          <H.Icon>
            <H.Icon_login>
              <Link href="/front/auth/guest_login">
                <a>
                  <span />
                  <p>로그인</p>
                </a>
              </Link>
            </H.Icon_login>
            <H.Icon_mypage>
              <Link href="#">
                <a>
                  <span />
                  <p>마이페이지</p>
                </a>
              </Link>
            </H.Icon_mypage>
            <H.Icon_cart>
              <Link href="/front/order/basket">
                <a>
                  <span />
                  <p>장바구니</p>
                </a>
              </Link>
            </H.Icon_cart>
          </H.Icon>
        </H.Inner>
      </H.Top>

      <H.Bottom>
        <H.Inner>
          <H.Category_All>
            <span /> 전체 카테고리
          </H.Category_All>

          <div>
            <ul>
              <H.category_new>
                <Link href="/front/product/new">
                  <a>신제품</a>
                </Link>
              </H.category_new>
              <H.category_only>
                <Link href="/front/product/only">
                  <a>only</a>
                </Link>
              </H.category_only>
              <H.category_event>
                <Link href="/front/promo/event">
                  <a>이벤트</a>
                </Link>
              </H.category_event>
              <H.category_gift>
                <Link href="/front/product/gift">
                  <a />
                </Link>
              </H.category_gift>
              <H.category_best>
                <Link href="/front/product/best">
                  <a>베스트</a>
                </Link>
              </H.category_best>
            </ul>
          </div>
        </H.Inner>
      </H.Bottom>
    </>
  );
}

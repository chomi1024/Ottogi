import { Inner } from "../../../../../styles/main";
import * as P from "./index.style";
import Breadcrumb from "./../../../Main/breadcrumb/index";
import Link from "next/link";

export default function ProductInfoWrapper(props) {
  return (
    <section>
      <Inner width={"1410px"} padding={"25px 0 0"}>
        <Breadcrumb
          nav1={props.result?.category1}
          nav2={props.result?.category2}
        />

        <P.Product_info>
          <P.Product_info_Left>
            <P.Product_small_Image>
              <img src={props.result?.imgsrc[0]} alt={props.result?.name} />
            </P.Product_small_Image>
            <P.Product_Main_Image>
              <img src={props.result?.imgsrc[0]} alt={props.result?.name} />
            </P.Product_Main_Image>
          </P.Product_info_Left>

          <P.Product_info_Right>
            <P.Title_Wrapper>
              <h3>{props.result?.name}</h3>
              <P.Icon_Wrapper>
                <button />
                <button />
              </P.Icon_Wrapper>
            </P.Title_Wrapper>

            <P.Grade_Wrapper>
              <P.Star>★★★★★{}</P.Star>
              <P.Grade>4.8{}</P.Grade>
              <P.Review>
                <Link href="/main">
                  <a> 44건{}</a>
                </Link>
              </P.Review>
            </P.Grade_Wrapper>

            <P.Price>
              {parseInt(props?.basePrice).toLocaleString()} <span>원</span>
            </P.Price>

            <P.Product_guide_Wrapper>
              <li>
                <P.Subtitle>원산지</P.Subtitle>
                <span>상품정보 원산지표시 참조</span>
              </li>
              <li>
                <P.Subtitle>적립정보</P.Subtitle>
                <span>로그인 후 적립혜택 제공</span>
              </li>
              <li>
                <P.Subtitle>배송정보</P.Subtitle>
                <P.ShippingInfo>
                  <em>{props.tag?.freeShipping || "3000"}</em>원
                  <span>{props.tag?.roomTemperature}</span>
                  <div>동일 배송유형 상품 30,000원 이상 구매시 무료</div>
                </P.ShippingInfo>
              </li>
              <li>
                <P.Subtitle>수량선택</P.Subtitle>
                <P.Input
                  type="number"
                  onChange={props.onclickValue}
                  min={1}
                  value={props.value}
                />
              </li>
            </P.Product_guide_Wrapper>

            <P.Total_Price_Wrapper>
              총금액
              <strong>
                {(parseInt(props.basePrice) * props.value).toLocaleString()}
              </strong>
              <span>원</span>
            </P.Total_Price_Wrapper>

            <P.Button_Wrapper>
              <P.Button_gift>선물함 담기</P.Button_gift>
              <P.Button_cart>장바구니</P.Button_cart>
              <P.Button_buy>바로구매</P.Button_buy>
            </P.Button_Wrapper>
          </P.Product_info_Right>
        </P.Product_info>
      </Inner>
    </section>
  );
}

import * as P from "./index.style";
import ProductInfoWrapper from "./../../../../Componant/Page/detail/Image_box/index";
import SwiperSlider4 from "./../../../../Componant/Main/swiper_slider4/index";
import ProductDetailWrapper from "./../../../../Componant/Page/detail/product_detail_wrapper/index";
import { Inner } from "./../../../../../styles/main";

export default function ProductDetailUI(props) {
  console.log(props.result);
  return (
    <>
      {/* 상품 소개 이미지 */}
      <ProductInfoWrapper
        onclickValue={props.onclickValue}
        basePrice={props.basePrice}
        value={props.value}
        result={props.result}
        grade={props.grade}
        grade_star={props.grade_star}
      />

      {/* 관련상품 추천 슬라이드 */}
      <SwiperSlider4 />

      {/* 상품 상세 소개 */}
      <ProductDetailWrapper
        onclickValue={props.onclickValue}
        basePrice={props.basePrice}
        value={props.value}
        result={props.result}
        grade_star={props.grade_star}
      />

      {/* 관련 상품 소개 */}
      <P.recommend_goods_wrapper>
        <Inner width={"1280px"}>
          <h4>함께 구매하면 더 좋은 상품</h4>

          <P.product_wrapper>
            <div>asdasdasd</div>
            <div>asdasdasdasdsdad</div>
            <div>asdasdasdasd</div>
            <div>asdas</div>
          </P.product_wrapper>
        </Inner>
      </P.recommend_goods_wrapper>
    </>
  );
}

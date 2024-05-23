import * as O from "./index.style";
import ProductWrapper from "./../../../../Componant/Main/Product_Wrapper/index";
import ProductMenu from "./../../../../Componant/Main/Product_Menu_Wrapper/index";
import { Inner, Title } from "../../../../../styles/main";

export default function OnlyProductUI() {
  return (
    <Inner width={"1410px"} overflow={"hidden"} padding={"25px 0 130px"}>
      <Title fontsize="" padding="40px 0 160px">
        only
      </Title>
      <O.Recommend_Wrapper>
        <h3>only 추천상품</h3>
        <div>캐러샐</div>
      </O.Recommend_Wrapper>

      <O.Contents>
        <ProductMenu />
        <ProductWrapper style_marginTop={"40px"} />
      </O.Contents>
    </Inner>
  );
}

import { Inner, Title } from "../../../../../styles/main";
import ProductMenu from "./../../../../Componant/Main/Product_Menu_Wrapper/index";
import ProductWrapper from "./../../../../Componant/Main/Product_Wrapper/index";

export default function NewProductUI() {
  return (
    <Inner width={"1410px"} overflow={"hidden"}>
      <Title padding="40px 0 120px">신제품</Title>
      <div>
        <ProductMenu />
        <ProductWrapper margin="40px 0 0" />
      </div>
    </Inner>
  );
}

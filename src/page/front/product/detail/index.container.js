import { useRouter } from "next/router";
import { product } from "../../../../../src/DB/index";
import ProductDetailUI from "./index.presenter";
import { useState } from "react";

export default function ProductDetail() {
  const router = useRouter();

  const result = product.find(
    (product) => product.id == router.query.productID
  );
  const basePrice = result?.price; //상품 기본가격

  const [value, setValue] = useState(1); //상품 갯수

  const onclickValue = (event) => {
    setValue(event.target.value);
  };

  const grade = result?.grade?.toFixed(1); //별점 소수점
  const grade_star = parseInt(grade); //별점 한자리

  return (
    <ProductDetailUI
      result={result}
      basePrice={basePrice}
      value={value}
      onclickValue={onclickValue}
      grade_star={grade_star}
    />
  );
}

import Link from "next/link";
import * as C from "./index.style";

export default function CartFalse() {
  return (
    <C.Wrapper>
      <C.Text>장바구니에 담긴 상품이 없습니다.</C.Text>
      <Link href="">
        <a>상품 담으러 가기</a>
      </Link>
    </C.Wrapper>
  );
}
